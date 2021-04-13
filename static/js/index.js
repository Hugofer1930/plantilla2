//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ACTIVAR");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("DESACTIVAR");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function Histo1(){	
	//alert("led off");
	console.log("imprimiendo historial");
	message = new Paho.MQTT.Message("historial impreso");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function borrarhisto(){	
	//alert("led off");
	console.log("historial borrado");
	message = new Paho.MQTT.Message("historial borrado");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "hfcasanova.fie@unach.edu.ec",
    password: "1930locohUgo1996",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("hfcasanova.fie@unach.edu.ec/claseprueba");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  u=message.payloadString;
	  if (u=="alarma activada y en orden")
	  {
	document.getElementById("sensor").innerHTML=message.payloadString;	  
	  }
	  else 
		  if (u=="SEGURIDAD VIOLADA, DIRIGASE A CASA o presione el boton ACTIVAR BOCINA")
		  {
			document.getElementById("sensor").innerHTML=message.payloadString;	  
		  }
	 
	  else 
		  if (u=="hola desde la web")
		{ 
		console.log("informacion relevante");	 
	 // document.getElementById("historial").innerHTML=message.payloadString;
		}
	  else 
		  if (u=="ACTIVAR")
		{ 
		console.log("informacion relevante"); 
	 // document.getElementById("historial").innerHTML=message.payloadString;
		}
	  else 
		  if (u=="DESACTIVAR")
		{ 
		console.log("informacion relevante");
	 // document.getElementById("historial").innerHTML=message.payloadString;
		}
	  else 
		  if (u=="Borrando todo")
		{ 
		console.log("borrando el historial");
	  document.getElementById("historial").innerHTML=message.payloadString;
		}

	  
	  
	  else {
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  
  }



  
