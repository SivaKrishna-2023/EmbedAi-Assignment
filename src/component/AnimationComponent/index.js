import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { FaArrowsRotate } from "react-icons/fa6";

import "./index.css";

const AnimationItemList = [
  {
    id: uuidv4(),
    questionText: "Who do you want to talk to?",
    ansText: "A trusted circle of support",
    backgroundImg:
      "https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135324.jpg?t=st=1712669877~exp=1712673477~hmac=e57baa6fc096625e064c77cdaab9855fa1185e428f70cd6925895cae23a4af4c&w=1060",
    cardsDetails: [
      {
        id: uuidv4(),
        title: "Annie Affirmations",
        imageUrl:
          "https://img.freepik.com/premium-photo/young-girl-illustration-ai-generated_1004510-560.jpg?w=996",
        description:
          "Greeting I am Daily Affirmations and my job is to help you stay positive, motivate, and inspire...",
      },
      {
        id: uuidv4(),
        title: "Get Advice",
        imageUrl:
          "https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1712670732~exp=1712674332~hmac=179a0949c0055b63efed7d017aa757c95012f9e04391ec7694e8af2695285ce6&w=740",
        description:
          "I am here to offer thoughtful recommendations for everything from daily life hacks to complex...",
      },
    ],
  },
  {
    id: uuidv4(),
    questionText: "What do you want to do?",
    ansText: "Epic challenges await",
    backgroundImg:
      "https://img.freepik.com/free-photo/overhead-view-hand-holding-scrabble-game-letters-rug-carpet_23-2148208023.jpg?t=st=1712670079~exp=1712673679~hmac=e9970a0d0558fb7b4d2ab12b8f06e03ef62ef53d3917d4ab9a303ea9db2255fc&w=1060",
    cardsDetails: [
      {
        id: uuidv4(),
        title: "Puzzle Prodigy",
        imageUrl:
          "https://img.freepik.com/free-photo/3d-illustration-man-brown-leather-jacket-with-mustache_1142-51045.jpg?t=st=1712670793~exp=1712674393~hmac=4a9fe18729bde2c3e2c8bfe76a2e792d189b46f75d1e7e3fdba78e91a6f1254b&w=740",
        description:
          "Greeting I am Puzzle Prodigy ready to lead you through a maze of mind-boggling puzzle...",
      },
      {
        id: uuidv4(),
        title: "Escape Room",
        imageUrl:
          "https://img.freepik.com/free-photo/soldier-boy-character-videogame_71767-102.jpg?t=st=1712670853~exp=1712674453~hmac=69020c7b57f62e00f09e2ece7a303faeb7a4c36cca192757dad222514a566785&w=740",
        description: "Welcome to your next challenge. Can you escape in time?",
      },
    ],
  },
  {
    id: uuidv4(),
    questionText: "What do you want to do?",
    ansText: "Learn something new today",
    backgroundImg:
      "https://img.freepik.com/premium-photo/wooden-table-with-blurred-library-ambiance-reading-corner_627079-3798.jpg?w=1060",
    cardsDetails: [
      {
        id: uuidv4(),
        title: "Eddie Explains",
        imageUrl:
          "https://img.freepik.com/free-photo/portrait-young-boy-christmas-celebrations_23-2150936481.jpg?t=st=1712670886~exp=1712674486~hmac=b80abdae35e694231c2356b2a4054011527aa30908d51ba5b82c798217af7b8c&w=996",
        description:
          "Hi there I'm Eddie, But around here, I'm better known as Eddie Explains. You know those tricky...",
      },
      {
        id: uuidv4(),
        title: "Language Practice",
        imageUrl:
          "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1712670914~exp=1712674514~hmac=d53d011a4b8f6de1fa9e9c3615b9f6365658944470d522939088f5ccd5291b5d&w=740",
        description:
          "I am your personal language guide. Whether you're starting fresh or polishing your...",
      },
    ],
  },
  {
    id: uuidv4(),
    questionText: "What do you want to do?",
    ansText: "Go on an adventure!",
    backgroundImg:
      "https://img.freepik.com/free-photo/3d-fantasy-scene_23-2151127936.jpg?t=st=1712670498~exp=1712674098~hmac=402a49f2042c9ba45b577286d98e6e9d11b4650478a65aad337ac0ce8bae9b96&w=1380",
    cardsDetails: [
      {
        id: uuidv4(),
        title: "Trip Planner",
        imageUrl:
          "https://img.freepik.com/free-photo/view-3d-videographer-with-camera_23-2151067046.jpg?t=st=1712670958~exp=1712674558~hmac=f6dcacaa04dbb64c744a32bf2ed5e175308d0257066362f30888382223c6dc2b&w=740",
        description:
          "I'm Trevor the Trip Planner, ready to orchestrate your dream journey. What destination is...",
      },
      {
        id: uuidv4(),
        title: "Language Liaison",
        imageUrl:
          "https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg?t=st=1712670990~exp=1712674590~hmac=1df56fec94f95e78ddb4b061e73f03d200f5e38d99ac9551a77299f228dfdf53&w=740",
        description:
          "I'm Lia the Language Liaison here to help you bridge language gaps and connect culture...",
      },
    ],
  },

  {
    id: uuidv4(),
    questionText: "Who do you want to do?",
    ansText: "Nurture your creativity",
    backgroundImg:
      "https://img.freepik.com/free-photo/mountain-landscape-pond-stone-splash_1417-59.jpg?t=st=1712670592~exp=1712674192~hmac=8471067dac83827930b5ea9b72c2d57546ab9c7beec5770fb924654a4672f534&w=1060",
    cardsDetails: [
      {
        id: uuidv4(),
        title: "Creative Helper",
        imageUrl:
          "https://img.freepik.com/free-photo/3d-illustration-handsome-young-man-white-shirt-bow-tie_1142-59172.jpg?t=st=1712671016~exp=1712674616~hmac=03468cf4007217992996bfc84f8853093c1e4a232669d371fa3b9bfe5508f461&w=740",
        description:
          "Hi I'm Ellie, whether you're an artist, a musician, or just exploring. I'm here to spark you...",
      },
      {
        id: uuidv4(),
        title: "Brainstorm Buddy",
        imageUrl:
          "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?t=st=1712671053~exp=1712674653~hmac=d9e3772eb292c921153740cd414315e40ba08cb1a72a445100f5125abe94fd0f&w=996",
        description:
          "Hey there I'm Benji, your brainstorming sidekick, here to help you connect the dots and...",
      },
    ],
  },
];

const AnimationComponent = () => {
  const [animationItem, setAnimationItem] = useState(AnimationItemList[0]);

  const getRandomAnimation = () => {
    const randomAnimation = Math.floor(
      Math.random() * AnimationItemList.length
    );
    return AnimationItemList[randomAnimation];
  };

  const onChangeAnimation = () => {
    const newAnimation = getRandomAnimation();
    setAnimationItem(newAnimation);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newAnimation = getRandomAnimation();
      setAnimationItem(newAnimation);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Style object for the background image
  const divStyle = {
    backgroundImage: `url(${animationItem.backgroundImg})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "300px",
    borderRadius: "25px",
    opacity: "0.6",
    animationDuration: "4s",
    animationName: "bgChange",
    animationIterationCount: "infinite",
  };

  const { cardsDetails } = animationItem;

  //   rendering the cards based on the props
  const renderCard = (item) => {
    const { id, title, description, imageUrl } = item;

    return (
      <div key={id} className="card-bg">
        <div>
          <div className="d-flex ">
            <img src={imageUrl} alt="card" className="card-img" />
            <p className="card-title">{title}</p>
          </div>
          <p className="card-description">{description}</p>
        </div>
        <p className="reply-p">Reply...</p>
      </div>
    );
  };

  return (
    <div
      style={divStyle}
      className="mt-4 p-2 d-none d-xl-flex justify-content-between"
    >
      <div className="card-1">
        <div>
          <p className="card-q">{animationItem.questionText}</p>
          <p className="card-ans">{animationItem.ansText}</p>
        </div>
        <button
          type="button"
          className="change-animation-btn"
          onClick={onChangeAnimation}
        >
          <FaArrowsRotate />
        </button>
      </div>

      {cardsDetails.map((each) => renderCard(each))}
    </div>
  );
};

export default AnimationComponent;