---
layout: template
title: Marcelo (research)
---

I summarize below my main research topics and provide some brief comments about them.

***

## Automatic Algorithm Configuration

Automatic techniques have been developed in the last years to automatically search for good parameter settings of some target algorithm. The so-called algorithm configurators apply heuristic algorithms ([ParamILS](http://www.cs.ubc.ca/labs/beta/Projects/ParamILS){:target="_blank"}, [GGA](https://bitbucket.org/gga_ac/dgga/src/master){:target="_blank"}), racing procedures ([irace](http://iridia.ulb.ac.be/irace){:target="_blank"}) or model based approaches ([SMAC](https://www.automl.org/automated-algorithm-design/algorithm-configuration/smac){:target="_blank"}) to explore the parameter space. Some useful content about this research field include:

+ [This survey article](http://dx.doi.org/10.1007/978-3-319-91086-4_17){:target="_blank"}
+ [This presentation (video) of Dr. Thomas Stützle](https://vimeo.com/199009877){:target="_blank"}
+ [This tutorial describing the use of irace](http://iridia.ulb.ac.be/irace/files/irace-comex-tutorial.pdf){:target="_blank"}

We have recently applied automatic configuration techniques for the design of heuristic optimization algorithms. First, we implement a configurable framework with the algorithm components and their input parameters. Then, we automatically search for good algorithm designs using algorithm configurators. Using this methodology, we found state-of-the-art algorithms for the [binary quadratic programming](/assets/publications/SouzaAndRitt2018evocop.pdf){:target="_blank"} and [test assignment](/assets/publications/SouzaAndRitt2018cec.pdf){:target="_blank"} problems, for example.

We are also working on the improvement of the automatic configuration tools. For example, we are exploring the use of capping mechanisms to speed up the configuration process. We are also developing analysis tools for irace (see [cat](https://github.com/souzamarcelo/cat){:target="_blank"}).

***

## Metaheuristics

When working with hard optimization problems, exact methods usually take too long to solve medium and large size instances. Metaheuristics are algorithmic models that determine a strategy to explore the search space and give a (hopefully) good solution in a reasonable time. Well-known examples of metaheuristics include: constructive approaches, like greedy randomized adaptive search procedure (GRASP) and ant colony optimization (ACO); search- or trajectory-based approaches, like local search, tabu search and simulated annealing; and population-based approaches, like genetic algorithms and scatter search. The book [Metaheuristic Search Concepts (Zäpfel et al., 2010)](https://www.springer.com/gp/book/9783642113420){:target="_blank"} presents several metaheuristics in detail.

We are interested in apply such algorithms to solve a number of interesting optimization problems, including:

+ Bin packing
+ Graph coloring
+ Clique
+ Binary quadratic programming
+ Vehicle routing
+ See other problems [here](https://en.wikipedia.org/wiki/List_of_NP-complete_problems){:target="_blank"}

***

## Agent-based Simulation

Agent-based models are frequently used to simulate complex systems and analyze the behavior that emerges from them. Each individual is modeled as an autonomous agent, which interacts with the environment and with other agents to accomplish its design objectives. [This video](https://www.youtube.com/watch?v=TfzZxJ46-z8){:target="_blank"} provides a brief and didactic explanation of agent-based simulations. Additional information can be found in [this article](https://wvvw.aaai.org/ojs/index.php/aimagazine/article/view/2425/2323){:target="_blank"} of Klügl and Bazzan (2012).

We have explored agent-based approaches to simulate traffic scenarios. For example, we studied the presence of [malicious agents in a collaborative traffic scenario with inter-vehicular communication](/assets/publications/KosterEtAl2016aire.pdf){:target="_blank"}. We also used a macroscopic (and mathematical) approach to simulate [traffic scenarios with electric vehicles](/assets/publications/SouzaEtAl2016itsc.pdf){:target="_blank"}, considering both travel time and energy consumption in the route choice for electric vehicles.

There are several agent-based simulators available, like [Repast](https://repast.github.io){:target="_blank"} and [NetLogo](https://ccl.northwestern.edu/netlogo){:target="_blank"}. They provide many functions that can be used to easily develop complex agent-based simulations (see [this short paper](/assets/publications/HabitzreuterAndSouza2017wesaac.pdf){:target="_blank"} for an example). Beyond traffic and transportation, we are particularly interested in using such simulators (especially NetLogo) to model and study scenarios of different domains, including:

+ Artificial intelligence applications
+ Nature and biology
+ Social sciences
+ Economics
+ Smart cities

***

## Applied Artificial Intelligence

We are also interested in different artificial intelligence methods and their application to solve real world problems. The main topics include (but are not limited to):

+ Machine learning
  + Supervised, unsupervised, and reinforcement learning
  + Automated machine learning
+ Planning (classical and heuristic search)
+ Constraint satisfaction/optimization problems
+ Agents and multiagent systems