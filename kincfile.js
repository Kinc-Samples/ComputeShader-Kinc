let project = new Project('Compute');

project.addFile('Sources/**');
project.setDebugDir('Deployment');

resolve(project);
