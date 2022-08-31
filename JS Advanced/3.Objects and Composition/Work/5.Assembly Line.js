function createAssemblyLine() {
    let assemblyLine = {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {

                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            }

        }
        , hasAudio: (car) => {
            car.currentTrack = {
                name: null,
                artist: null
            },
                car.nowPlaying = () => {
                    if (car.currentTrack !== null)
                        console.log(`Now playing ${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }

        },
        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                }
                else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                }  else if (distance < 0.5) {
                    console.log("Beep!");
                } 
            }
        }
    }
    return assemblyLine;
}




const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


