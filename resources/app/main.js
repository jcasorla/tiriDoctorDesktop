// require('./server/config/database');

const fs = require('fs');
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell;
const ipc= require('electron').ipcMain;
const router = require('electron-routes').Router;
const { protocol } = require('electron')
const mongoose = require('mongoose');


var bcrypt = require('bcryptjs');
require('dotenv').config();


mongoose.Schema.ObjectId.get(v => v != null ? v.toString() : v);
mongoose.connect('mongodb://localhost/pacientes', {useNewUrlParser: true});

const actualSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },
    consulta: {
        type: String,
        required: [true, "Motivo de Consulta es obligatorio"],
        minlength: [10, "Motivo de Consulta - Por lo menos 10 letras"]
    },
    enfermedad: { 
        type: String,
        required: [true,"Resumen es obligatorio"],
        minlength: [3, 'Resumen - Por lo menos 4 letras'],
        maxlength: [23, 'Resumen - dete tener menos de 25 letras'],

    },    
    
  
}, { timestamps: true });
mongoose.model('Actual', actualSchema);

const gridSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },
    
    cella1: { type: String, required: false},
    cella2: { type: String, required: false},
    cella3: { type: String, required: false},
    cella4: { type: String, required: false},
    cella5: { type: String, required: false},
    cella6: { type: String, required: false},
    cella7: { type: String, required: false},
    cellb1: { type: String, required: false},
    cellb2: { type: String, required: false},
    cellb3: { type: String, required: false},
    cellb4: { type: String, required: false},
    cellb5: { type: String, required: false},
    cellb6: { type: String, required: false},
    cellb7: { type: String, required: false},
    cellc1: { type: String, required: false},
    cellc2: { type: String, required: false},
    cellc3: { type: String, required: false},
    cellc4: { type: String, required: false},
    cellc5: { type: String, required: false},
    cellc6: { type: String, required: false},
    cellc7: { type: String, required: false},
    celld1: { type: String, required: false},
    celld2: { type: String, required: false},
    celld3: { type: String, required: false},
    celld4: { type: String, required: false},
    celld5: { type: String, required: false},
    celld6: { type: String, required: false},
    celld7: { type: String, required: false},
    celle1: { type: String, required: false},
    celle2: { type: String, required: false},
    celle3: { type: String, required: false},
    celle4: { type: String, required: false},
    celle5: { type: String, required: false},
    celle6: { type: String, required: false},
    celle7: { type: String, required: false},
    cellf1: { type: String, required: false},
    cellf2: { type: String, required: false},
    cellf3: { type: String, required: false},
    cellf4: { type: String, required: false},
    cellf5: { type: String, required: false},
    cellf6: { type: String, required: false},
    cellf7: { type: String, required: false},
    cellg1: { type: String, required: false},
    cellg2: { type: String, required: false},
    cellg3: { type: String, required: false},
    cellg4: { type: String, required: false},
    cellg5: { type: String, required: false},
    cellg6: { type: String, required: false},
    cellg7: { type: String, required: false},
    cellh1: { type: String, required: false},
    cellh2: { type: String, required: false},
    cellh3: { type: String, required: false},
    cellh4: { type: String, required: false},
    cellh5: { type: String, required: false},
    cellh6: { type: String, required: false},
    cellh7: { type: String, required: false},
    celli1: { type: String, required: false},
    celli2: { type: String, required: false},
    celli3: { type: String, required: false},
    celli4: { type: String, required: false},
    celli5: { type: String, required: false},
    celli6: { type: String, required: false},
    celli7: { type: String, required: false},
    cellj1: { type: String, required: false},
    cellj2: { type: String, required: false},
    cellj3: { type: String, required: false},
    cellj4: { type: String, required: false},
    cellj5: { type: String, required: false},
    cellj6: { type: String, required: false},
    cellj7: { type: String, required: false},
   
}, {timestamps: true });
mongoose.model('Grid', gridSchema);

const NoPatologicoSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },  
    alcohol: { 
        type: Boolean,
        required: false

    },
    alcoholContent: { 
        type: String,
        required: false

    },    
    tabacco: { 
        type: Boolean,
        required: false

    },
    
    tabaccoContent: { 
        type: String,
        required: false

    },  
    droga: { 
        type: Boolean,
        required: false

    },

    drugContent: { 
        type: String,
        required: false

    },  
    immuno: { 
        type: Boolean,
        required: false

    },
    immunoContent: { 
        type: String,
        required: false

    },  
    otro: { 
        type: String,
        required: false

    },
    comment: { 
        type: String,
        required: false

    },    
}, {timestamps: true });
mongoose.model('NoPatologico', NoPatologicoSchema);

const patologicoSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },    
    cardiovascular: { 
        type: Boolean,
        required: false

    },
    renal: { 
        type: Boolean,
        required: false

    },
    pulmonar: { 
        type: Boolean,
        required: false

    },
    digestivo: { 
        type: Boolean,
        required: false

    },
    diabetes: { 
        type: Boolean,
        required: false

    },
    quirurgico: { 
        type: Boolean,
        required: false

    },
    alergico: { 
        type: Boolean,
        required: false

    },
    transfusion: { 
        type: Boolean,
        required: false

    },    
    medications: { 
        type: String,
        required: false

    },
    comment: { 
        type: String,
        required: false

    },    
}, {timestamps: true });
mongoose.model('Patologico', patologicoSchema);

const problemaSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },
    nombre: { 
        type: String,
        required: [true, "Problema es obligatorio"],
        minlength: [3, 'Problema - Por lo menos 3 letras']

    },
    activo: { 
        type: String,
        required: [true, "Activo es obligatorio"],
    },
    
  
}, { timestamps: true });
mongoose.model('Problema', problemaSchema);

const counterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
counterSchema.index({ _id: 1, seq: 1 }, { unique: true })

const counterModel = mongoose.model('counter', counterSchema);
const autoIncrementModelID = function (modelName, doc, next) {
    counterModel.findByIdAndUpdate(        // ** Method call begins **
      modelName,                           // The ID to find for in counters model
      { $inc: { seq: 1 } },                // The update
      { new: true, upsert: true },         // The options
      function(error, counter) {           // The callback
        if(error) return next(error);
  
        doc.pid = counter.seq;
        next();
      }
    );                                     // ** Method call ends **
  }
  
  module.exports = autoIncrementModelID;

  const familiarSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },
    
    padreVivo: { 
        type: String,
        required: [true, "Padre Vivo es obligatorio"]

    },
 
    commentPadre: { 
        type: String,
        required: [true, "Enfermedad que Padece Padre es obligatorio"]

    },
    madreViva: { 
        type: String,
        required: [true, "Madre Viva es obligatorio"]

    },

    commentMadre: { 
        type: String,
        required: [true, "Enfermedad que Padece Madre es obligatorio"]

    },
    hermanos: { 
        type: Number,
        required: [true, "Cuantos Hermanos es obligatorio"]

    },
    hermanosVivos: { 
        type: String,
        required: false

    },

    commentHermanos: { 
        type: String,
        required: false

    },
        
}, {timestamps: true });
mongoose.model('Familiar', familiarSchema);

const fileSchema = new mongoose.Schema({
    
    filename: { type: String, required: false},
    originalname: { type: String, required: false}    
}, {timestamps: true });
mongoose.model('File', fileSchema);

const fisicoSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },
    taDerecho: {
        type: String,
        required: [true, "TA derecho es obligatorio"]
    },
    taIzquierdo: {
        type: String,
        required: [true, "TA izquierdo es obligatorio"]
    },
    freqC: {
        type: String,
        required: [true, "F.C. es obligatorio"]
    },
    freqR: {
        type: String,
        required: [true, "Freq, Resp. es obligatorio"]
    },
    temp: {
        type: String,
        required: [true, "Temp. es obligatorio"]
    },
    peso: {
        type: String,
        required: [true, "Peso es obligatorio"]
    },
    talla: {
        type: String,
        required: [true, "Talla es obligatorio"]
    },
    imc: {
        type: Number,
        required: [true, "IMC es obligatorio"]
    },
    cabeza: {
        type: String,
        required: [true, "Cabeza Y Cuello es obligatorio"]
    },
       
  
}, { timestamps: true });
mongoose.model('Fisico', fisicoSchema);

const ginecoSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },    
    menarquia: { 
        type: String,
        required: [true, "Menarquia es obligatorio"]

    },
    ritmo: { 
        type: String,
        required: [true, "Ritmo es obligatorio"]

    },
    fum: { 
        type: Date,
        required: [true, "F.U.M es obligatorio"]

    },
    g: { 
        type: String,
        required: [true, "G es obligatorio"]

    },
    p: { 
        type: String,
        required: [true, "P es obligatorio"]

    },
    c: { 
        type: String,
        required: [true, "C es obligatorio"]

    },
    ivsa: { 
        type: String,
        required: true

    },
    comment: { 
        type: String,
        required: false

    },
    anticonceptivo: { 
        type: String,
        required: false

    },
    cuales: { 
        type: String,
        required: false

    },    
}, {timestamps: true });
mongoose.model('Gineco', ginecoSchema);

const labSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: false
    },    
    imagen: { type: String, required: false},
    otro: { type: String, required: false},
    torax: { type: String, required: false},
    abdomen: { type: String, required: false},
    extre: { type: String, required: false},
    neuro: { type: String, required: false},  
}, {timestamps: true });
mongoose.model('Lab', labSchema);



const Actual = mongoose.model('Actual');
const Patologico = mongoose.model('Patologico');
const NoPatologico = mongoose.model('NoPatologico');
const Familiar = mongoose.model('Familiar');
const Gineco = mongoose.model('Gineco');
const Fisico = mongoose.model('Fisico');
const Problema = mongoose.model('Problema');
const Grid = mongoose.model('Grid');
const Lab = mongoose.model('Lab');
const File = mongoose.model('File');
const noPatologicoSchema = mongoose.model('NoPatologico').schema;

const PacienteSchema = new mongoose.Schema({
    pid: { type: Number, unique: true, min: 1 },
    sid: {
        type: String,
        required: false
    },
    firstName: { 
        type: String,
        required: [true, "Primer Nombre es obligatorio"],
        minlength: [3, 'Primer Nombre -Por lo menos 3 letras']

    },
    lastName: { 
        type: String,
        required: [true, "Apellido es obligatorio"],
        minlength: [3, 'Apellido - Por lo menos 3 letras']

    },
    sLastName: { 
        type: String,
        required: [true, "Segundo Apellido es obligatorio"],
        minlength: [3, 'Segundo Apellido - Por lo menos 3 letras']

    },    
    sex: {
        type: String,
        required: [true, "Sexo es obligatorio"]
    }, 
    age: {
        type: Number,
        required: [true, "Edad es obligatorio"],
        min: [1, " Edad - Por lo Menos 1"]
    },
    phone: {
        type: String,
        required: [true, "Telefono es obligatorio"],
        minlength: [7, 'Telefono - Por lo menos 7 digitos']
    },
    email: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    colonia: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: [true, "Ciudad es obligatorio"],
        minlength: [4, 'Ciudad - Por lo menos 4 letras']
    }, 
    state: {
        type: String,
        required: [true, "Estado es obligatorio"],
    }, 
    zip: {
        type: Number,
        required: false,
        minlength: [5, 'C.P. - Por lo menos 5 numeros']
    }, 
    occupation: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    creator: {
        type: String,
        required: false
    },
    actual: [actualSchema],
    patologico: [patologicoSchema],
    nopatologico: [noPatologicoSchema],
    familiar: [familiarSchema],
    gineco: [ginecoSchema],
    fisico: [fisicoSchema],
    problema: [problemaSchema],
    grid: [gridSchema],
    lab: [labSchema],
    file: [fileSchema]
        
}, {timestamps: true });

PacienteSchema.pre('save', function (next) {
    if (!this.isNew) {
      next();
      return;
    }
  
    autoIncrementModelID('pacient', this, next);
  });

mongoose.model('Paciente', PacienteSchema);

const Paciente = mongoose.model('Paciente');

const UserSchema = new mongoose.Schema({
    
    firstName: { 
        type: String,
        required: [true, "Debes ingresar el primer nombre"],
        minlength: [3, 'el primer nombre debe tener por lo menos 3 letras']

    },
    lastName: { 
        type: String,
        required: [true, "Debes ingresar el apellido"],
        minlength: [3, 'el apellido debe tener por lo menos 3 letras']

    },
    slastName: { 
        type: String,
        required: [true, "Debes ingresar el Segundo apellido"],
        minlength: [3, 'el Segundo apellido debe tener por lo menos 3 letras']

    },
    username: { 
        type: String,
        required: [true, "username cannot be blank"],
        minlength: [5, 'username - por lo menos 5 letras']

    },     
    email: {
        type: String,
        required: [true, "debes ingresar el correo electronico"]
    },
    password: {
        type: String,
        required: [true, "debes ingresar la contraseña"],
    },
    level: {
        type: String,
        default: 6,
        required: false     
    },
    active: { 
        type: Boolean,
        default: true,
        required: false
    },
    
        
}, {timestamps: true });

mongoose.model('User', UserSchema);


let win

function createWindow () {
  win = new BrowserWindow({width: 1400, height: 750
  ,webPreferences: {
		nodeIntegration: true,
    backgroundThrottling: false    
	}})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}



app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


// require('./server/controllers/pacientes2');



function validateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        return (false)
}

function onlyNumbers(num) 
{
    if (/^[0-9 \-()+]+$/.test(num))
    {
        return (true)
    }
        return (false)
}

ipc.on('/api/pacientes', function(event, arg){ //catch from angular
    async function asyncCall() {
      try {
        const pacientes = await Paciente.find();
        JSON.stringify(pacientes);
       
        event.returnValue={pacientes: pacientes};
     
      }
      catch (err) {
        console.log(err);         
      }
    }
    
    asyncCall();    
      
  })
  
 

ipc.on('/api/pacientes/view', function(event, arg){ 
    
    Paciente.findById({ _id : arg })
    .then((data) => {
        event.returnValue={pacientes: data};
    })
    .catch(err =>{
        console.log("error" + err);
    });
  });

  ipc.on('/api/pacientes/create', function(event, arg){ 
    var password = 'test';

    if(arg.email){
        var result=validateEmail(arg.email);
        if(!result){
            event.returnValue={error:['Correo es invalido']}; 
        }
    }
    
    var result2=onlyNumbers(arg.phone);

    
    if(!result2){
        event.returnValue={error:['Telefono debe tener solo digitos']}; 
         
    }
    else{
        const paciente = new Paciente(arg); 
        async function run() {
            const saltValue = await bcrypt.genSalt(10);
            bcrypt
            .hash(password, saltValue)
            .then(hash =>{
                paciente.password=hash;
                paciente.save()
                .then((data) => {
                    paciente.sid=paciente._id.toString();
                    Paciente.findByIdAndUpdate(paciente._id , paciente, {runValidators: true, new: true} )
                    .then((data) => {
                        event.returnValue=true;
                    })
                    .catch(err => {
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                        event.returnValue=errors;
                    });
                })
                .catch(err => {
                    const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                    event.returnValue=errors;
                });
                
                
               

            })
            .catch(err =>{
                console.log(err);                  

            });
        }
        run();
       

    }
  
});
  ipc.on('/api/pacientes/update', function(event, arg){ 
    arg._id=arg.sid;
    let nopaTemp={'sid':'', '_id':'', 'alcohol':'', 'alcoholContent':'', 'tabacco':'', 'tabaccoContent': '', 'droga':'', 'drugContent':'', 
                    'immuno' :'', 'immunoContent':'', 'otro':'', 'comment':'', 'createdAt': '', 'updatedAt':''}
    let paTemp={'sid':'', '_id':'','cardiovascular': '', 'renal':'', 'pulmonar':'', 'digestivo':'', 'diabetes':'', 'quirurgico':'', 'alergico':'',
     'transfusion':'', 'medications':'', 'comment':'','createdAt': '', 'updatedAt':''}
    let faTemp={'sid':'', '_id':'','padreVivo': '', 'commentPadre':'', 'madreViva':'', 'commentMadre':'', 'hermanos':'', 
    'hermanosVivos':'', 'commentHermanos':'',
     'createdAt': '', 'updatedAt':''}
    let fiTemp={'sid':'', '_id':'','taDerecho': '', 'taIzquierdo':'', 'freqC':'', 'freqR':'', 'temp':'', 'peso':'', 'talla':'',
     'imc':'', 'cabeza':'','createdAt': '', 'updatedAt':''}

    let giTemp={'sid':'', '_id':'','menarquia': '', 'ritmo':'', 'fum':'', 'g':'', 'p':'', 'c':'', 'ivsa':'',
     'comment':'', 'anticonceptivo':'', 'cuales':'','createdAt': '', 'updatedAt':''}
    let laTemp={'sid':'', '_id':'','imagen': '', 'otro':'', 'torax':'', 'abdomen':'', 'extre':'', 'neuro':'', 
    'createdAt': '', 'updatedAt':''}
    let acTemp={'sid':'', '_id':'','consulta': '', 'enfermedad':'', 'createdAt': '', 'updatedAt':''}
    let prTemp={'sid':'', '_id':'','nombre': '', 'activo':'', 'createdAt': '', 'updatedAt':''}
    let grTemp={'sid':'', '_id':'', 'cella1':'', 'cella2':'', 'cella3':'', 'cella4':'', 'cella5':'', 'cella6':'', 'cella7':'',
    'cellb1':'', 'cellb2':'', 'cellb3':'', 'cellb4':'', 'cellb5':'', 'cellb6':'', 'cellb7':'',
    'cellc1':'', 'cellc2':'', 'cellc3':'', 'cellc4':'', 'cellc5':'', 'cellc6':'', 'cellc7':'',
    'celld1':'', 'celld2':'', 'celld3':'', 'celld4':'', 'celld5':'', 'celld6':'', 'celld7':'',
    'celle1':'', 'celle2':'', 'celle3':'', 'celle4':'', 'celle5':'', 'celle6':'', 'celle7':'',
    'cellf1':'', 'cellf2':'', 'cellf3':'', 'cellf4':'', 'cellf5':'', 'cellf6':'', 'cellf7':'',
    'cellg1':'', 'cellg2':'', 'cellg3':'', 'cellg4':'', 'cellg5':'', 'cellg6':'', 'cellg7':'',
    'cellh1':'', 'cellh2':'', 'cellh3':'', 'cellh4':'', 'cellh5':'', 'cellh6':'', 'cellh7':'',
    'celli1':'', 'celli2':'', 'celli3':'', 'celli4':'', 'celli5':'', 'celli6':'', 'celli7':'',
    'cellj1':'', 'cellj2':'', 'cellj3':'', 'cellj4':'', 'cellj5':'', 'cellj6':'', 'cellj7':'', 'createdAt': '', 'updatedAt':''
    }

    if(arg.nopatologico.length>0){
        nopaTemp.sid=arg.nopatologico[0]['_doc'].sid;
        nopaTemp._id=arg.nopatologico[0]['_doc'].sid;
        nopaTemp.alcohol=arg.nopatologico[0]['_doc'].alcohol;
        nopaTemp.alcoholContent=arg.nopatologico[0]['_doc'].alcoholContent;
        nopaTemp.tabacco=arg.nopatologico[0]['_doc'].tabacco;
        nopaTemp.tabaccoContent=arg.nopatologico[0]['_doc'].tabaccoContent;
        nopaTemp.droga=arg.nopatologico[0]['_doc'].droga;
        nopaTemp.drugContent=arg.nopatologico[0]['_doc'].drugContent;
        nopaTemp.immuno=arg.nopatologico[0]['_doc'].immuno;
        nopaTemp.immunoContent=arg.nopatologico[0]['_doc'].immunoContent;
        nopaTemp.otro=arg.nopatologico[0]['_doc'].otro;
        nopaTemp.comment=arg.nopatologico[0]['_doc'].comment;
        nopaTemp.createdAt=arg.nopatologico[0]['_doc'].createdAt;
        nopaTemp.updatedAt=arg.nopatologico[0]['_doc'].updatedAt;
        arg.nopatologico=[];
        arg.nopatologico.push(nopaTemp);            
    }
    if(arg.patologico.length>0){
        paTemp.sid=arg.patologico[0]['_doc'].sid;
        paTemp._id=arg.patologico[0]['_doc'].sid;
        paTemp.cardiovascular=arg.patologico[0]['_doc'].cardiovascular;
        paTemp.renal=arg.patologico[0]['_doc'].renal;
        paTemp.pulmonar=arg.patologico[0]['_doc'].pulmonar;
        paTemp.digestivo=arg.patologico[0]['_doc'].digestivo;
        paTemp.diabetes=arg.patologico[0]['_doc'].diabetes;
        paTemp.quirurgico=arg.patologico[0]['_doc'].quirurgico;
        paTemp.alergico=arg.patologico[0]['_doc'].alergico;
        paTemp.transfusion=arg.patologico[0]['_doc'].transfusion;
        paTemp.medications=arg.patologico[0]['_doc'].medications;
        paTemp.comment=arg.patologico[0]['_doc'].comment;
        paTemp.createdAt=arg.patologico[0]['_doc'].createdAt;
        paTemp.updatedAt=arg.patologico[0]['_doc'].updatedAt;
        arg.patologico=[];
        arg.patologico.push(paTemp);            
    }
    if(arg.familiar.length>0){
        faTemp.sid=arg.familiar[0]['_doc'].sid;
        faTemp._id=arg.familiar[0]['_doc'].sid;
        faTemp.padreVivo=arg.familiar[0]['_doc'].padreVivo;
        faTemp.commentPadre=arg.familiar[0]['_doc'].commentPadre;
        faTemp.madreViva=arg.familiar[0]['_doc'].madreViva;
        faTemp.commentMadre=arg.familiar[0]['_doc'].commentMadre;
        faTemp.hermanos=arg.familiar[0]['_doc'].hermanos;
        faTemp.hermanosVivos=arg.familiar[0]['_doc'].hermanosVivos;
        faTemp.commentHermanos=arg.familiar[0]['_doc'].commentHermanos;
        faTemp.createdAt=arg.familiar[0]['_doc'].createdAt;
        faTemp.updatedAt=arg.familiar[0]['_doc'].updatedAt;
        arg.familiar=[];
        arg.familiar.push(faTemp);            
    }

    if(arg.fisico.length>0){
        fiTemp.sid=arg.fisico[0]['_doc'].sid;
        fiTemp._id=arg.fisico[0]['_doc'].sid;
        fiTemp.taDerecho=arg.fisico[0]['_doc'].taDerecho;
        fiTemp.taIzquierdo=arg.fisico[0]['_doc'].taIzquierdo;
        fiTemp.freqC=arg.fisico[0]['_doc'].freqC;
        fiTemp.freqR=arg.fisico[0]['_doc'].freqR;
        fiTemp.temp=arg.fisico[0]['_doc'].temp;
        fiTemp.peso=arg.fisico[0]['_doc'].peso;
        fiTemp.talla=arg.fisico[0]['_doc'].talla;
        fiTemp.imc=arg.fisico[0]['_doc'].imc;
        fiTemp.cabeza=arg.fisico[0]['_doc'].cabeza;
        fiTemp.createdAt=arg.fisico[0]['_doc'].createdAt;
        fiTemp.updatedAt=arg.fisico[0]['_doc'].updatedAt;
        arg.fisico=[];
        arg.fisico.push(fiTemp);
    }

    if(arg.gineco.length>0){
        giTemp.sid=arg.gineco[0]['_doc'].sid;
        giTemp._id=arg.gineco[0]['_doc'].sid;
        giTemp.menarquia=arg.gineco[0]['_doc'].menarquia;
        giTemp.ritmo=arg.gineco[0]['_doc'].ritmo;
        giTemp.fum=arg.gineco[0]['_doc'].fum;
        giTemp.g=arg.gineco[0]['_doc'].g;
        giTemp.p=arg.gineco[0]['_doc'].p;
        giTemp.c=arg.gineco[0]['_doc'].c;
        giTemp.ivsa=arg.gineco[0]['_doc'].ivsa;
        giTemp.comment=arg.gineco[0]['_doc'].comment;
        giTemp.anticonceptivo=arg.gineco[0]['_doc'].anticonceptivo;
        giTemp.cuales=arg.gineco[0]['_doc'].cuales;
        giTemp.createdAt=arg.gineco[0]['_doc'].createdAt;
        giTemp.updatedAt=arg.gineco[0]['_doc'].updatedAt;
        arg.gineco=[];
        arg.gineco.push(giTemp);            
    }
    if(arg.lab.length>0){
        
        laTemp.sid=arg.lab[0]['_doc'].sid;
        laTemp._id=arg.lab[0]['_doc'].sid;
        laTemp.imagen=arg.lab[0]['_doc'].imagen;
        laTemp.otro=arg.lab[0]['_doc'].otro;
        laTemp.torax=arg.lab[0]['_doc'].torax;
        laTemp.abdomen=arg.lab[0]['_doc'].abdomen;
        laTemp.extre=arg.lab[0]['_doc'].extre;
        laTemp.neuro=arg.lab[0]['_doc'].neuro;
        laTemp.createdAt=arg.lab[0]['_doc'].createdAt;
        laTemp.updatedAt=arg.lab[0]['_doc'].updatedAt;
        arg.lab=[];
        arg.lab.push(laTemp);            
    }
    if(arg.actual.length>0){
        let tmpactArr=[];
        tmpactArr=arg.actual;
        arg.actual=[];
        for(var i=0; i< tmpactArr.length; i++){   
            acTemp.sid=tmpactArr[i]['_doc'].sid;
            acTemp._id=tmpactArr[i]['_doc'].sid;
            acTemp.consulta=tmpactArr[i]['_doc'].consulta;
            acTemp.enfermedad=tmpactArr[i]['_doc'].enfermedad;
            acTemp.createdAt=tmpactArr[i]['_doc'].createdAt;
            acTemp.updatedAt=tmpactArr[i]['_doc'].updatedAt;
            arg.actual.push(acTemp);
            acTemp={'sid':'', '_id':'','consulta': '', 'enfermedad':'', 'createdAt': '', 'updatedAt':''}
        }   
    }
    if(arg.problema.length>0){
        let tmpproArr=[];
        tmpproArr= arg.problema;
        arg.problema=[];
        for(var i=0; i< tmpproArr.length; i++){    
            prTemp.sid=tmpproArr[i]['_doc'].sid;
            prTemp._id=tmpproArr[i]['_doc'].sid;
            prTemp.nombre=tmpproArr[i]['_doc'].nombre;
            prTemp.activo=tmpproArr[i]['_doc'].activo;
            prTemp.createdAt=tmpproArr[i]['_doc'].createdAt;
            prTemp.updatedAt=tmpproArr[i]['_doc'].updatedAt;
            arg.problema.push(prTemp);
            prTemp={'sid':'', '_id':'','nombre': '', 'activo':'', 'createdAt': '', 'updatedAt':''}
        }  
    }
    if(arg.grid.length>0){
        grTemp.sid=arg.grid[0]['_doc'].sid;
        grTemp._id=arg.grid[0]['_doc'].sid;
        grTemp.cella1=arg.grid[0]['_doc'].cella1;
        grTemp.cella2=arg.grid[0]['_doc'].cella2;
        grTemp.cella3=arg.grid[0]['_doc'].cella3;
        grTemp.cella4=arg.grid[0]['_doc'].cella4;
        grTemp.cella5=arg.grid[0]['_doc'].cella5;
        grTemp.cella6=arg.grid[0]['_doc'].cella6;
        grTemp.cella7=arg.grid[0]['_doc'].cella7;
		grTemp.cellb1=arg.grid[0]['_doc'].cellb1;
        grTemp.cellb2=arg.grid[0]['_doc'].cellb2;
        grTemp.cellb3=arg.grid[0]['_doc'].cellb3;
        grTemp.cellb4=arg.grid[0]['_doc'].cellb4;
        grTemp.cellb5=arg.grid[0]['_doc'].cellb5;
        grTemp.cellb6=arg.grid[0]['_doc'].cellb6;
        grTemp.cellb7=arg.grid[0]['_doc'].cellb7;
		grTemp.cellc1=arg.grid[0]['_doc'].cellc1;
        grTemp.cellc2=arg.grid[0]['_doc'].cellc2;
        grTemp.cellc3=arg.grid[0]['_doc'].cellc3;
        grTemp.cellc4=arg.grid[0]['_doc'].cellc4;
        grTemp.cellc5=arg.grid[0]['_doc'].cellc5;
        grTemp.cellc6=arg.grid[0]['_doc'].cellc6;
        grTemp.cellc7=arg.grid[0]['_doc'].cellc7;
		grTemp.celld1=arg.grid[0]['_doc'].celld1;
        grTemp.celld2=arg.grid[0]['_doc'].celld2;
        grTemp.celld3=arg.grid[0]['_doc'].celld3;
        grTemp.celld4=arg.grid[0]['_doc'].celld4;
        grTemp.celld5=arg.grid[0]['_doc'].celld5;
        grTemp.celld6=arg.grid[0]['_doc'].celld6;
        grTemp.celld7=arg.grid[0]['_doc'].celld7;
        grTemp.celle1=arg.grid[0]['_doc'].celle1;
        grTemp.celle2=arg.grid[0]['_doc'].celle2;
        grTemp.celle3=arg.grid[0]['_doc'].celle3;
        grTemp.celle4=arg.grid[0]['_doc'].celle4;
        grTemp.celle5=arg.grid[0]['_doc'].celle5;
        grTemp.celle6=arg.grid[0]['_doc'].celle6;
        grTemp.celle7=arg.grid[0]['_doc'].celle7;
		grTemp.cellf1=arg.grid[0]['_doc'].cellf1;
        grTemp.cellf2=arg.grid[0]['_doc'].cellf2;
        grTemp.cellf3=arg.grid[0]['_doc'].cellf3;
        grTemp.cellf4=arg.grid[0]['_doc'].cellf4;
        grTemp.cellf5=arg.grid[0]['_doc'].cellf5;
        grTemp.cellf6=arg.grid[0]['_doc'].cellf6;
        grTemp.cellf7=arg.grid[0]['_doc'].cellf7;
		grTemp.cellg1=arg.grid[0]['_doc'].cellg1;
        grTemp.cellg2=arg.grid[0]['_doc'].cellg2;
        grTemp.cellg3=arg.grid[0]['_doc'].cellg3;
        grTemp.cellg4=arg.grid[0]['_doc'].cellg4;
        grTemp.cellg5=arg.grid[0]['_doc'].cellg5;
        grTemp.cellg6=arg.grid[0]['_doc'].cellg6;
        grTemp.cellg7=arg.grid[0]['_doc'].cellg7;
		grTemp.cellh1=arg.grid[0]['_doc'].cellh1;
        grTemp.cellh2=arg.grid[0]['_doc'].cellh2;
        grTemp.cellh3=arg.grid[0]['_doc'].cellh3;
        grTemp.cellh4=arg.grid[0]['_doc'].cellh4;
        grTemp.cellh5=arg.grid[0]['_doc'].cellh5;
        grTemp.cellh6=arg.grid[0]['_doc'].cellh6;
        grTemp.cellh7=arg.grid[0]['_doc'].cellh7;
		grTemp.celli1=arg.grid[0]['_doc'].celli1;
        grTemp.celli2=arg.grid[0]['_doc'].celli2;
        grTemp.celli3=arg.grid[0]['_doc'].celli3;
        grTemp.celli4=arg.grid[0]['_doc'].celli4;
        grTemp.celli5=arg.grid[0]['_doc'].celli5;
        grTemp.celli6=arg.grid[0]['_doc'].celli6;
        grTemp.celli7=arg.grid[0]['_doc'].celli7;
		grTemp.cellj1=arg.grid[0]['_doc'].cellj1;
        grTemp.cellj2=arg.grid[0]['_doc'].cellj2;
        grTemp.cellj3=arg.grid[0]['_doc'].cellj3;
        grTemp.cellj4=arg.grid[0]['_doc'].cellj4;
        grTemp.cellj5=arg.grid[0]['_doc'].cellj5;
        grTemp.cellj6=arg.grid[0]['_doc'].cellj6;
        grTemp.cellj7=arg.grid[0]['_doc'].cellj7;
        grTemp.createdAt=arg.grid[0]['_doc'].createdAt;
        grTemp.updatedAt=arg.grid[0]['_doc'].updatedAt;
        arg.grid=[];
        arg.grid.push(grTemp);            
    }
  
    if(arg.email){
      var result=validateEmail(arg.email);
      if(!result){
          event.returnValue={error:['Correo es invalido']}; 
      }
    }
    var result2=onlyNumbers(arg.phone);
  
          
    if(!result2){
        event.returnValue={error:['Telefono debe tener solo digitos']};  
    }
    else{    
      Paciente.findByIdAndUpdate(arg.sid , arg, {runValidators: true, new: true} )
              .then((data) => {
                
                event.returnValue=true; 
              })
              .catch(err => {
                  console.log(err);
                  const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                  event.returnValue=errors; 
              });
  
      }
  
    
  
  });
  ipc.on('/api/pacientes/delete', function(event, arg){
    Paciente.findOneAndDelete({ _id : arg })
            .then((data) => {
                if(data.patologico.length>0){
                    for(var i=0; i< data.patologico.length; i++){
                        Patologico.findOneAndDelete({ _id : data.patologico[i]['_doc'].sid })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }                  
                }
                if(data.actual.length>0){
                    for(var i=0; i< data.actual.length; i++){
                        Actual.findOneAndDelete({ _id : data.actual[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }   
                }
                if(data.nopatologico.length>0){
                    for(var i=0; i< data.nopatologico.length; i++){
                        NoPatologico.findOneAndDelete({ _id : data.nopatologico[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.familiar.length>0){
                    for(var i=0; i< data.familiar.length; i++){
                        Familiar.findOneAndDelete({ _id : data.familiar[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.gineco.length>0){
                    for(var i=0; i< data.gineco.length; i++){
                        Gineco.findOneAndDelete({ _id : data.gineco[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.fisico.length>0){
                    for(var i=0; i< data.fisico.length; i++){
                        Fisico.findOneAndDelete({ _id : data.fisico[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.problema.length>0){
                    for(var i=0; i< data.problema.length; i++){
                        Problema.findOneAndDelete({ _id : data.problema[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.grid.length>0){
                    for(var i=0; i< data.grid.length; i++){
                        Grid.findOneAndDelete({ _id : data.grid[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                if(data.lab.length>0){
                    for(var i=0; i< data.lab.length; i++){
                        Lab.findOneAndDelete({ _id : data.lab[i]['_doc']._id })
                        .then((data) => {
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    }               
                }
                // if(data.file.length>0){
                //     for(var i=0; i< data.file.length; i++){
                //         filepath = path.join(__dirname,'../../uploads') +'/'+ data.file[i].filename;
                //         File.findOneAndDelete({ _id : data.file[i]._id })
                //         .then((data) => {
                //             try{
                //                 fs.unlinkSync(filepath);
                                
                //             }catch(err){
                //                 console.log(err);
                //                 const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                //                 res.status(422).json(errors );        
                //             }
                //         })
                //         .catch(err => {
                //             res.json(err);
                //         });

                //     }               
                // }
            })
            .catch(err => {
                console.log('error deleting');
            });

});  

ipc.on('/api/actual/create', function(event, arg){
    Actual.create(arg.actual, function(err, data){
        if (err){
            const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
            event.returnValue=errors; 
        }
        else{
            data.sid=data._id.toString();
            Actual.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
                    .then((data) => {

                        Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {actual: data}}, {runValidators: true, new: true}, function(err, data){
                            if (err){
                                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                                event.returnValue=errors; 
                            }
                            else{
                                event.returnValue=true; 
                            }
                        })
                    })
                    .catch(err => {
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                        event.returnValue=errors;
                    });
            
        }
    })
});

ipc.on('/api/actual/update', function(event, arg){
    Actual.findByIdAndUpdate(arg.actual._id , arg.actual, {runValidators: true, new: true} )
        .then((data) => {
            Paciente.findOneAndUpdate(
                { "_id": arg.pat.sid, "actual._id": arg.actual._id },
                { 
                    "$set": {
                        "actual.$.consulta": arg.actual.consulta,"actual.$.enfermedad": arg.actual.enfermedad
                    },
                                    
                },
                function(err,doc) {

                }
            );
            event.returnValue=true;
        })
        .catch(err => {
            const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
            event.returnValue=errors;
            console.log(err);
        });

});

ipc.on('/api/actual/delete', function(event, arg){
  
    Actual.findOneAndDelete({ _id : arg.actual.sid })
    .then((data) => {
        Paciente.findById({ _id : arg.pat.sid })
        
        .then((paciente) => {
            paciente.update(
                {
                    "$pull": {
                        "actual": { "_id": arg.actual.sid }
                    }
                }, 
                function (err, numAffected) { console.log("data:", numAffected) }
            );  
        }); 
    })
    .catch(err => {
        console.log(err);
    });   
});


ipc.on('/api/problema/create', function(event, arg){
    Problema.create(arg.problema, function(err, data){
        if (err){
            const errors = Object.keys(err.errors).map(key => err.errors[key].message)
            event.returnValue=errors;  
        }
        else{

            data.sid=data._id.toString();

            Problema.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {

                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {problema: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
            
        }
    })

});

ipc.on('/api/problema/update', function(event, arg){

    Problema.findByIdAndUpdate(arg.problema._id , arg.problema, {runValidators: true, new: true} )
    .then((data) => {
       
        Paciente.findOneAndUpdate(
            { "_id": arg.pat.sid, "problema._id": arg.problema._id },
            { 
                "$set": {
                    "problema.$.nombre": arg.problema.nombre,"problema.$.activo": arg.problema.activo
                },
                                
            },
            function(err,doc) {
            }
        );
        event.returnValue=true;
        
    })
    .catch(err => {
        console.log(err);
        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        event.returnValue=errors; 
        
    });
});

ipc.on('/api/problema/delete', function(event, arg){   

    Problema.findOneAndDelete({ _id : arg.problema.sid })
    .then((data) => {
        Paciente.findById({ _id : arg.pat.sid })
        
        .then((paciente) => {
            paciente.update(
                {
                    "$pull": {
                        "problema": { "_id": arg.problema.sid }
                    }
                }, 
                function (err, numAffected) { console.log("data:", numAffected) }
            );  
        }); 
    })
    .catch(err => {
        console.log(err);
    });   
});

ipc.on('/api/patologico/create', function(event, arg){
 
    Patologico.create(arg.patologico, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Patologico.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {patologico: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/patologico/update', function(event, arg){
    Patologico.findByIdAndUpdate(arg.patologico._id , arg.patologico, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "patologico._id": arg.patologico._id },
                { 
                    "$set": {
                        "patologico": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});


ipc.on('/api/nopatologico/create', function(event, arg){
 
    NoPatologico.create(arg.nopatologico, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            NoPatologico.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {nopatologico: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/nopatologico/update', function(event, arg){
    NoPatologico.findByIdAndUpdate(arg.nopatologico._id , arg.nopatologico, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "nopatologico._id": arg.nopatologico._id },
                { 
                    "$set": {
                        "nopatologico": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});


ipc.on('/api/familiar/create', function(event, arg){
 
    Familiar.create(arg.familiar, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Familiar.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {familiar: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/familiar/update', function(event, arg){
    Familiar.findByIdAndUpdate(arg.familiar._id , arg.familiar, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "familiar._id": arg.familiar._id },
                { 
                    "$set": {
                        "familiar": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});

ipc.on('/api/fisico/create', function(event, arg){
 
    Fisico.create(arg.fisico, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Fisico.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {fisico: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/fisico/update', function(event, arg){
    Fisico.findByIdAndUpdate(arg.fisico._id , arg.fisico, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "fisico._id": arg.fisico._id },
                { 
                    "$set": {
                        "fisico": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});

ipc.on('/api/gineco/create', function(event, arg){
 
    Gineco.create(arg.gineco, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Gineco.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {gineco: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/gineco/update', function(event, arg){
    Gineco.findByIdAndUpdate(arg.gineco._id , arg.gineco, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "gineco._id": arg.gineco._id },
                { 
                    "$set": {
                        "gineco": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});

ipc.on('/api/lab/create', function(event, arg){
 
    Lab.create(arg.lab, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Lab.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {lab: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/lab/update', function(event, arg){
    Lab.findByIdAndUpdate(arg.lab._id , arg.lab, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "lab._id": arg.lab._id },
                { 
                    "$set": {
                        "lab": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});

ipc.on('/api/grid/create', function(event, arg){
 
    Grid.create(arg.grid, function(err, data){
        if (err){
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        }
        else{

            data.sid=data._id.toString();

            Grid.findByIdAndUpdate(data._id , data, {runValidators: true, new: true} )
            .then((data) => {
                Paciente.findOneAndUpdate({_id:arg.pat.sid}, {$push : {grid: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        console.log(err);
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        event.returnValue=errors; 
                    }
                    else{
                        event.returnValue=true; 
                    }
                })

               
            })
            .catch(err => {
                console.log(err);
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                event.returnValue=errors;
            });
        }
    })
});

ipc.on('/api/grid/update', function(event, arg){
    Grid.findByIdAndUpdate(arg.grid._id , arg.grid, {runValidators: true, new: true} )
        .then((data) => {           
            Paciente.findOneAndUpdate(                
                { "_id": arg.pat.sid, "grid._id": arg.grid._id },
                { 
                    "$set": {
                        "grid": data
                    },
                   
                },
                function(err,doc) {
                               
                }
            );
            event.returnValue=true; 
            
        })
        .catch(err => {
            console.log(err);
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            event.returnValue=errors; 
        });

});
