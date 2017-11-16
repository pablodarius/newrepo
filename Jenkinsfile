node {
   stage('Preparation') { // for display purposes
      // Get some code from a GitHub repository
      git 'https://github.com/pablodarius/newrepo'
   }
   
   stage('read file') {
      // Run the maven build
        sFichero = readFile 'README.md'
        echo sFichero
        sFichero1 = readFile 'code.src'
        echo sFichero1
   }
}
