interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
}

interface SmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeatures: boolean;
}

const poorDeveloper: Developer<SmartWatch> = {
  name: "Mr. Poor",
  salary: 1000,
  device: {
    brand: "Walton",
    model: "oldModel",
    releaseYear: 20000,
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: false,
  },
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 500000,
  device: {
    brand: "Apple",
    model: "Mac Mini M4",
    releaseYear: 2024,
  },
  smartWatch: {
    heartRate: "80 bpm",
    callSupport: true,
    calculator: true,
    AiFeatures: true,
  },
};
