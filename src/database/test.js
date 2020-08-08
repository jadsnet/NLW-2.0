const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
  proffyValue = {
    name: 'Rafaela Guillar',
    avatar: 'https://images.unsplash.com/photo-1596886173650-f9024653c4ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    whatsapp: '13945781245',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'  
  }

  classValue = {
    subject: 1, 
    cost :'20'
  }

  classScheduleValues = [
    {
      weekday: 1, 
      time_from: 720, 
      time_to: 1222
    },
    {
      weekday: 2, 
      time_from: 720, 
      time_to: 1222
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})


  const selectedProffys = await db.all(' SELECT * FROM proffys')
  //console.log(selectedProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  //console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "2"
    AND class_schedule.time_from <= "820"
    AND class_schedule.time_to > 520
  `)

  //console.log(selectClassesSchedules)
})