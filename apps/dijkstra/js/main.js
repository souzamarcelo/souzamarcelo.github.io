(function($) {

    var sre = 0;
    var pathr;

    function PriorityQueue() {
        this._nodes = [];

        this.enqueue = function(priority, item) {
            this._nodes.push({priority: priority, item: item});
            this.sort();
        };

        this.dequeue = function() {
            return this._nodes.shift().item;
        };

        this.sort = function() {
            this._nodes.sort(function(a, b) {
                return a.priority - b.priority;
            });
        };

        this.isEmpty = function() {
            return !this._nodes.length;
        };

        this.count = function() {
            return this._nodes.length;
        };
    }

    function Graph() {
        this.vertices = {};

        this.addVertex = function(name, edges) {
            this.vertices[name] = edges;
        };

        this.shortestPath = function(start, finish) {
            var INFINITY = 1 / 0;
            var nodes = new PriorityQueue();
            var distances = {};
            var previous = {};
            var path = [];
            var smallest;


            for (var vertex in this.vertices) {
                if (vertex == start) {
                    distances[vertex] = 0;
                    nodes.enqueue(0, vertex);
                } else {
                    distances[vertex] = INFINITY;
                    nodes.enqueue(INFINITY, vertex);
                }

                previous[vertex] = null;
            }

            while (!nodes.isEmpty()) {
                smallest = nodes.dequeue();

                if (smallest == finish) {
                    sre = distances[smallest];

                    if (distances[finish] == INFINITY) {
                        return [];
                    }

                    var u = finish;
                    while (previous[u]) {
                        path.unshift(u);
                        u = previous[u];
                    }
                    path.unshift(start);
                    break;
                }

                if (distances[smallest] == INFINITY) {
                    continue;
                }

                for (var neighbour in this.vertices[smallest]) {
                    var newDistance = parseInt(distances[smallest]) + parseInt(this.vertices[smallest][neighbour]);
                    if (newDistance < distances[neighbour]) {
                        distances[neighbour] = newDistance;
                        previous[neighbour] = smallest;
                        nodes.enqueue(newDistance, neighbour);
                    }
                }

            }
            return path;
        };
    }

    var Renderer = function(canvas) {
        var canvas = $(canvas).get(0);
        var ctx = canvas.getContext("2d");
        var particleSystem;

        var that = {
            init: function(system) {
                particleSystem = system;
                particleSystem.screenSize(canvas.width, canvas.height);
                particleSystem.screenPadding(80);
                that.initMouseHandling();
            },
            redraw: function() {
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                var nodeBoxes = [];
                particleSystem.eachNode(function(node, pt) {
                    nodeBoxes[node.name] = [pt.x - 20, pt.y - 20, 40, 40];
                });

                particleSystem.eachEdge(function(edge, pt1, pt2) {
                    var weight;
                    var tail = intersect_line_box(pt1, pt2, nodeBoxes[edge.source.name])
                    var head = intersect_line_box(tail, pt2, nodeBoxes[edge.target.name])

                    ctx.save()
                    ctx.beginPath()
                    ctx.strokeStyle = "#000000";
                    ctx.fillStyle = "#000000";
                    if (verify(parseInt(edge.source.name), parseInt(edge.target.name))) {
                        ctx.lineWidth = 5;
                        weight = 5;
                    } else {
                        weight = 1;
                        ctx.lineWidth = 1;
                    }
                    ctx.moveTo(tail.x, tail.y)
                    ctx.lineTo(head.x, head.y)
                    ctx.stroke()
                    ctx.restore()
                    if (edge.data.directed) {
                        ctx.save()
                        var wt = !isNaN(weight) ? parseFloat(weight) : 1
                        var arrowLength = 6 + wt
                        var arrowWidth = 2 + wt
                        ctx.translate(head.x, head.y);
                        ctx.rotate(Math.atan2(head.y - tail.y, head.x - tail.x));
                        ctx.clearRect(-arrowLength / 2, -wt / 2, arrowLength / 2, wt)
                        ctx.fillStyle = "#000000";
                        ctx.beginPath();
                        ctx.moveTo(-arrowLength, arrowWidth);
                        ctx.lineTo(0, 0);
                        ctx.lineTo(-arrowLength, -arrowWidth);
                        ctx.lineTo(-arrowLength * 0.8, -0);
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore()
                    }
                })
                particleSystem.eachNode(function(node, pt) {
                    ctx.fillStyle = (node.data.alone) ? "orange" : "black";
                    ctx.fillStyle = "#e2e0d9";
                    ctx.font = "20px Times New Roman";
                    ctx.textAlign = "center";

                    ctx.beginPath();

                    ctx.arc(pt.x, pt.y, 20, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = "black";
                    ctx.fillText(node.name, pt.x, pt.y + 5);

                });

            },
            initMouseHandling: function() {
                var dragged = null;
                var handler = {
                    clicked: function(e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);
                        dragged = particleSystem.nearest(_mouseP);
                        if (dragged && dragged.node !== null) {

                            dragged.node.fixed = true;
                        }

                        $(canvas).bind('mousemove', handler.dragged);
                        $(window).bind('mouseup', handler.dropped);

                        return false;
                    },
                    dragged: function(e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);

                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s);
                            dragged.node.p = p;
                        }

                        return false;
                    },
                    dropped: function(e) {
                        if (dragged == null || dragged.node == undefined)
                            return;
                        if (dragged.node !== null)
                            dragged.node.fixed = false;
                        dragged.node.tempMass = 1000;
                        dragged = null;
                        $(canvas).unbind('mousemove', handler.dragged);
                        $(window).unbind('mouseup', handler.dropped);
                        _mouseP = null;
                        return false;
                    }
                };

                $(canvas).mousedown(handler.clicked);
            }
        };

        var intersect_line_line = function(p1, p2, p3, p4)
        {
            var denom = ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
            if (denom === 0)
                return false
            var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;
            var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;

            if (ua < 0 || ua > 1 || ub < 0 || ub > 1)
                return false
            return arbor.Point(p1.x + ua * (p2.x - p1.x), p1.y + ua * (p2.y - p1.y));
        }

        var intersect_line_box = function(p1, p2, boxTuple)
        {
            var p3 = {x: boxTuple[0], y: boxTuple[1]},
            w = boxTuple[2],
                    h = boxTuple[3]

            var tl = {x: p3.x, y: p3.y};
            var tr = {x: p3.x + w, y: p3.y};
            var bl = {x: p3.x, y: p3.y + h};
            var br = {x: p3.x + w, y: p3.y + h};

            return intersect_line_line(p1, p2, tl, tr) ||
                    intersect_line_line(p1, p2, tr, br) ||
                    intersect_line_line(p1, p2, br, bl) ||
                    intersect_line_line(p1, p2, bl, tl) ||
                    false
        }

        return that;
    };

    function verify(a, b) {
        var indexa = -1;
        var indexb = -1;
        for (var i = 0, max = pathr.length; i < max; i++) {

            if (a == pathr[i]) {
                indexa = i;
            }

            if (b == pathr[i]) {
                indexb = i;
            }
        }
        if (indexa != -1 && indexb != -1) {
            if (indexb - indexa == 1)
                return true;
            else
                return false;
        } else {
            return false;
        }
    }
    $(document).ready(function() {
        var sys = arbor.ParticleSystem(1000, 600, 0.5);
        sys.parameters({gravity: true});
        sys.renderer = Renderer("#viewport");

        function get() {
            var inicio = document.getElementById("inicio").value;
            var final = document.getElementById("fim").value;
            var input = document.getElementById("input").value;
            localStorage.setItem("dijkstra-inicio", inicio);
            localStorage.setItem("dijkstra-final", final);
            localStorage.setItem("dijkstra-input", input);
            location.reload();//recarrega a pagina, ver como dar um update somente no canvas !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }

        function run() {
            pathr = {};
            var inicio = localStorage.getItem("dijkstra-inicio");
            var final = localStorage.getItem("dijkstra-final");
            var input = localStorage.getItem("dijkstra-input");
             document.getElementById("input").value = input;
            var g = new Graph();
            var edges = [];
            edges = input.split("\n");
            var vlinks = [];
            var vertices1 = edges[0];
            for (var i = 1; i < edges.length; i++) {
                var v = {
                    source: 0,
                    destination: 0,
                    cost: 0
                };
                var line = edges[i].split(" ");
                v.source = line[0];
                v.destination = line[1];
                v.cost = line[2];
                vlinks.push(v);
            }
            for (var i = 0, max = vertices1; i < max; i++) {
                sys.addNode(i);
            }
            for (var i = 0, max = vertices1; i < max; i++) {
                var arcos = [];
                var temArco = false;
                for (var j = 0, max = vlinks.length; j < max; j++) {
                    if (vlinks[j].source == i) {
                        temArco = true;
                        arcos[vlinks[j].destination] = vlinks[j].cost;
                        sys.addEdge(i, vlinks[j].destination, {type: "arrow", directed: true, w: vlinks[j].cost});
                    }
                }
                g.addVertex(i, arcos);
            }
            pathr = g.shortestPath(inicio, final);
            console.log(pathr);
            console.log(sre);
        }
        $('#button').on('click', get);
        $(document).ready(run);
    });
})(this.jQuery)