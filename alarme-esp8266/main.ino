#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

int pirPin = D2; // Define o pino conectado ao sensor PIR.
int val; // Armazena o estado lido pelo sensor.
unsigned long lastMotionTime = 0; // Armazena o tempo da última detecção de movimento
const unsigned long motionCooldown = 10000; // Tempo de intervalo entre envios de 10 segundos

void connectToWiFi() {
  Serial.println("Conectando ao WiFi...");
  WiFi.mode(WIFI_OFF);       
  delay(1000);
  WiFi.mode(WIFI_STA);
  WiFi.begin("luis_phone", "luis123");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("WiFi conectado.");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(9600);
  connectToWiFi();
}

void sendMotionDetected() {
  if (WiFi.status() == WL_CONNECTED) { 
    HTTPClient http;

    http.begin("https://alarme-embarcados.onrender.com/api/v1/motion-data"); 
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST("{\"sensorName\":\"sensorN1\"}"); 

    if (httpResponseCode > 0) {
      String response = http.getString(); 
      Serial.println(httpResponseCode); 
      Serial.println(response); 
    } else {
      Serial.print("Erro ao enviar POST: ");
      Serial.println(httpResponseCode); 
    }

    http.end(); 
  } else {
    Serial.println("WiFi não conectado");
  }
}

void loop() {
  val = digitalRead(pirPin); // Lê o estado do sensor PIR.

  if (val == HIGH) {
    Serial.println("Movimento detectado ALARME"); 

    unsigned long currentTime = millis();
    if (currentTime - lastMotionTime > motionCooldown) { // Verifica se já passou o tempo de intervalo
      sendMotionDetected();
      lastMotionTime = currentTime;
    }
  } else {
    Serial.println("Sem movimento"); // Se não houver movimento, printa "Sem movimento".
  }

  delay(100); 
}
