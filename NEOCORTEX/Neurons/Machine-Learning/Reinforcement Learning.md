A subset of machine learning where an agent is taught how to take actions in a variable and volatile environment, to maximize for a cumulative numerical reward.

The learner (agent) is not told what actions to take and instead discovers the actions that give the most reward through experimentation (it's non supervised.).

The agent's actions at a current time step, $t$, affect their outcomes at later time steps $t+n$. 

Overtime as an agent gains more experience, by optimizing their actions for a reward, the agent will be able to optimize all such actions that maximize the reward at time step $t$ and $t+n$.

As an example, in *chess*, the environment is the game itself.

An agent takes a certain action which then receives a feedback though a changed state and then reward, which is based on the goal it's optimizing for.

![[Screenshot 2024-07-05 at 10.46.55 AM.png| 500]]

In RL, there are 2 main aspects, denoted as *exploration* and *exploitation*. 

Within *exploration*, an agent must explore the surrounding environment to tryout new actions, visit new states, to then update it's knowledge. With the gathered datapoints the agent will be able to iteratively error-correct and identify which actions are not of good-use.

Within *exploitation*, the agent uses their current knowledge to maximize the cumulative reward. The agent must choose the best action that maximize the reward, and then refines it's policy to adjust how it selects it's actions to maximize the reward.

A challenge in balancing exploration and exploitation, if an agent explores too much, it might waste time by not optimizing for it's reward, while if it exploits too much, it might fail to learn about the surrounding environment and find better opportunities given a limited knowledge of the environment.[^1]

---

[^1]: *One of the challenges that arise in reinforcement learning, and not in other
kinds of learning, is the trade-off between exploration and exploitation. To
obtain a lot of reward, a reinforcement learning agent must prefer actions
that it has tried in the past and found to be effective in producing reward.
But to discover such actions, it has to try actions that it has not selected
before. The agent has to exploit what it already knows in order to obtain
reward, but it also has to explore in order to make better action selections in
the future. The dilemma is that neither exploration nor exploitation can be
pursued exclusively without failing at the task. The agent must try a variety of
actions and progressively favor those that appear to be best. On a stochastic
task, each action must be tried many times to gain a reliable estimate its
expected reward. The exploration–exploitation dilemma has been intensively
studied by mathematicians for many decades (see Chapter 2). For now, we
simply note that the entire issue of balancing exploration and exploitation
does not even arise in supervised and unsupervised learning, at least in their
purist forms.*