//https://www.eclipse.org/paho/clients/js/






function borrarhisto(){	
	//alert("led off");
	console.log("historial borrado");
	message = new Paho.MQTT.Message("  ");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

	function Histo1(){	
	//alert("led off");
	console.log("imprimiendo historial 1, espere un momento");
	message = new Paho.MQTT.Message("historial 1");
    	message.destinationName = "hfcasanova.fie@unach.edu.ec/claseprueba";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
	function Histo2(){	
	//alert("led off");
	console.log("imprimiendo historial 2, espere un momento");
	message = new Paho.MQTT.Message("historial 2");
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
	  
	  
	  //var x = document.getElementById("myText").value;
	  if (u=="imprimiendo historial 1, espere un momento")
	  {
	document.getElementById("historial").innerHTML=message.payloadString;	  
	  }
	  else 
		  if (u=="imprimiendo historial 2, espere un momento")
		  {
			document.getElementById("historial").innerHTML=message.payloadString;	  
		  }
	 
	  else 
		  if (u=="hola desde la web")
		{ 
		console.log("informacion relevante");	 
	 // document.getElementById("historial").innerHTML=message.payloadString;
		}
	 	  else {
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  
  }



  
