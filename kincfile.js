const project = new Project('Compute');

project.addFile('Sources/**');
project.addFile('Shaders/**');
project.setDebugDir('Deployment');

resolve(project);
