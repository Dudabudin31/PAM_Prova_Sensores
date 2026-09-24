import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { DeviceMotion } from 'expo-sensors';

export default function Movimento() {

  const [status, setStatus] = useState("Parado");

  useEffect(() => {
    let inscricao = null;

    DeviceMotion.setUpdateInterval(200);
    inscricao = DeviceMotion.addListener((monitor) => {
      //Construir a lógica de detecção de movimento

      const aceleracao = monitor.acceleration;

      if (aceleracao == null) {
        return;
      }

      if (Math.abs(aceleracao.x) > 5 ||
          Math.abs(aceleracao.y) > 5 ||
          Math.abs(aceleracao.z) > 5)
      {
        setStatus("Movimento detectado");
      }
      else
      {
        setStatus("Parado");
      }

      return () => {
        inscricao?.remove();
      }
    });

  }, []);

  return (
    <View>
      <Text>{status}</Text>
    </View>
  );
}