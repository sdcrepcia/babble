export type Word = {
  word: string;
  category: string;
  image: string;
};

export const WORDS: Word[] = [
  // Animals
  { word: "cat", category: "animals", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" },
  { word: "dog", category: "animals", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600" },
  { word: "bird", category: "animals", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600" },
  { word: "fish", category: "animals", image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600" },
  { word: "cow", category: "animals", image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600" },
  { word: "duck", category: "animals", image: "https://images.unsplash.com/photo-1563409236302-8442b5e644df?w=600" },
  { word: "frog", category: "animals", image: "https://images.unsplash.com/photo-1551189014-fe516d87d518?w=600" },
  { word: "horse", category: "animals", image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600" },
  { word: "lion", category: "animals", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600" },
  { word: "elephant", category: "animals", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600" },
  { word: "bear", category: "animals", image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600" },
  { word: "rabbit", category: "animals", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600" },
  { word: "pig", category: "animals", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600" },
  { word: "sheep", category: "animals", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=600" },
  { word: "monkey", category: "animals", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600" },
  { word: "penguin", category: "animals", image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=600" },
  { word: "turtle", category: "animals", image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600" },
  { word: "snake", category: "animals", image: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=600" },
  { word: "tiger", category: "animals", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600" },
  { word: "giraffe", category: "animals", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600" },

  // Food
  { word: "apple", category: "food", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600" },
  { word: "banana", category: "food", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600" },
  { word: "pizza", category: "food", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" },
  { word: "bread", category: "food", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" },
  { word: "milk", category: "food", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600" },
  { word: "egg", category: "food", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600" },
  { word: "cake", category: "food", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" },
  { word: "cookie", category: "food", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600" },
  { word: "cheese", category: "food", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600" },
  { word: "strawberry", category: "food", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600" },
  { word: "watermelon", category: "food", image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600" },
  { word: "grapes", category: "food", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600" },
  { word: "carrot", category: "food", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600" },
  { word: "corn", category: "food", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600" },
  { word: "orange", category: "food", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600" },

  // Vehicles
  { word: "car", category: "vehicles", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600" },
  { word: "bus", category: "vehicles", image: "https://images.unsplash.com/photo-1602248406547-bda7af9fb7e9?w=600" },
  { word: "truck", category: "vehicles", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600" },
  { word: "plane", category: "vehicles", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600" },
  { word: "boat", category: "vehicles", image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600" },
  { word: "train", category: "vehicles", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600" },
  { word: "bike", category: "vehicles", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600" },
  { word: "helicopter", category: "vehicles", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600" },
  { word: "rocket", category: "vehicles", image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600" },

  // Colors
  { word: "red", category: "colors", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { word: "blue", category: "colors", image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600" },
  { word: "green", category: "colors", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600" },
  { word: "yellow", category: "colors", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600" },
  { word: "purple", category: "colors", image: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600" },
  { word: "orange", category: "colors", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600" },
  { word: "pink", category: "colors", image: "https://images.unsplash.com/photo-1559181567-c3190f5c4b5a?w=600" },
  { word: "white", category: "colors", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600" },
  { word: "black", category: "colors", image: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=600" },

  // Body Parts
  { word: "hand", category: "body", image: "https://images.unsplash.com/photo-1559757175-7cb036e0d465?w=600" },
  { word: "foot", category: "body", image: "https://images.unsplash.com/photo-1468616047823-d688c44bf6dd?w=600" },
  { word: "eye", category: "body", image: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=600" },
  { word: "nose", category: "body", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600" },
  { word: "mouth", category: "body", image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600" },
  { word: "ear", category: "body", image: "https://images.unsplash.com/photo-1535469618671-e3bde0a5f8f4?w=600" },

  // Nature
  { word: "sun", category: "nature", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" },
  { word: "moon", category: "nature", image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600" },
  { word: "star", category: "nature", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600" },
  { word: "rain", category: "nature", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600" },
  { word: "snow", category: "nature", image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600" },
  { word: "flower", category: "nature", image: "https://images.unsplash.com/photo-1490750967868-88df5691cc3d?w=600" },
  { word: "tree", category: "nature", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600" },
  { word: "cloud", category: "nature", image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600" },
  { word: "rainbow", category: "nature", image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600" },
  { word: "ocean", category: "nature", image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600" },

  // Household
  { word: "ball", category: "toys", image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600" },
  { word: "book", category: "toys", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600" },
  { word: "chair", category: "household", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600" },
  { word: "bed", category: "household", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600" },
  { word: "door", category: "household", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { word: "house", category: "household", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
  { word: "cup", category: "household", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600" },
  { word: "hat", category: "clothing", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600" },
  { word: "shoe", category: "clothing", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
];
