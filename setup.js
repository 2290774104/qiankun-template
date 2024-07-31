const { exec } = require('child_process')

exec('npm run dev:app1', __dirname)
exec('npm run dev:app2', __dirname)
exec('npm run dev:app3', __dirname)
exec('npm run dev:app4', __dirname)
exec('npm run dev:main', __dirname)

console.log('main', 'http://localhost:5173/')
console.log('app1', 'http://localhost:8081/app1')
console.log('app2', 'http://localhost:8082/app2')
console.log('app3', 'http://localhost:8083/app3')
console.log('app4', 'http://localhost:8084/app4')
