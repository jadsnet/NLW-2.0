const { subjects,  weekdays, getSubject } = require('./utils/format')

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  const isNoEmpty = Object.keys(data).length != 0

  if(isNoEmpty){

    data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect('/study')

  }

  return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
server
.use(express.static('public'))

.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)

.listen(5500)