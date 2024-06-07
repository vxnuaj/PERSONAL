
`sys.path` part of the [[sys]] module, is a variable that stores a list of strings where each string is a directory path of your system.

`sys.path `is used by Python to search for modules when we attempt to import them. When we call `import`, Python looks for the imported module in the directories listed in the `sys.path` variable.

By default, `sys.path` enables python to search for modules in the following order:

1. The current working directory
2. The Python installation's `lib` directory

You can modify the `sys.path` and append items to it through the `insert()` method at a specific index.