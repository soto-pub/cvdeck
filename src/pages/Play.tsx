import { Box, Button, Typography } from "@mui/material";
import cardgame_deck from "../img/cardgame_deck.png";

import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Words } from "../words/Words";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Play = () => {
  //カードを出現させるフラグ
  const [appearWord, setAppearWord] = useState(false);

  const { words, wordsLength } = Words();

  const copyWords = [...words];

  //既に出たカードを格納
  const [alreadyAppearWords, setAlreadyAppearWords] = useState<string[]>([]);
  //残カード枚数
  const [remainWordNumber, setRemainWordNumber] = useState(wordsLength);

  //全カードから既に出たカードを排除
  for (let i = 0; i < alreadyAppearWords.length; i++) {
    copyWords.splice(copyWords.indexOf(alreadyAppearWords[i]), 1);
  }

  const onClickDraw = () => {
    const randomNumber = Math.floor(Math.random() * remainWordNumber);
    setAlreadyAppearWords([...alreadyAppearWords, copyWords[randomNumber]]);
    setRemainWordNumber(remainWordNumber - 1);
    setAppearWord(true);
  };

  const onClickReset = () => {
    setAlreadyAppearWords([]);
    setRemainWordNumber(wordsLength);
  };

  const sh = window.innerHeight;

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100%",
          }}
        >
          <Typography
            variant={isMobile || sh < 700 ? "h5" : "h4"}
            sx={{
              mt: sh < 850 ? "5vh" : "10vh",
            }}
          >
            会話デッキ
            <br />
            スタンダードフォーマル
            <br />
            残りのカード数：{remainWordNumber}
          </Typography>
          <Button
            variant="contained"
            onClick={onClickReset}
            disabled={appearWord ? true : false}
            sx={{
              backgroundColor: "red",
              mt: 2,
              ":hover": { backgroundColor: "#880000" },
            }}
          >
            デッキをリセット
          </Button>
          <img
            src={cardgame_deck}
            alt="デッキ"
            style={{
              width: isMobile ? "75%" : "50%",
              maxWidth: sh < 800 ? "250px" : "350px",
              maxHeight: sh < 800 ? "250px" : "350px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Button
            variant="contained"
            onClick={onClickDraw}
            disabled={remainWordNumber <= 0 ? true : false}
            sx={{
              opacity: 0.9,
              width: isMobile ? "35vw" : "25vw",
              height: isMobile ? "35vw" : "25vw",
              maxWidth: sh < 800 ? "150px" : "200px",
              maxHeight: sh < 800 ? "150px" : "200px",
              fontSize: isMobile ? "15px" : "30px",
              fontWeight: "bold",
              borderRadius: "50%",
              // color: "#fff",
              // backgroundColor: "#eb6100",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            ドロー！
          </Button>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#89c7de",
              py: 1,
              position: "absolute",
              bottom: 0,
            }}
          >
            <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
              ホームに戻る
            </Link>
          </Box>

          {appearWord && (
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
                width: "80%",
                height: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <Typography variant={isMobile ? "h5" : "h5"} sx={{ p: 2 }}>
                {alreadyAppearWords[alreadyAppearWords.length - 1]}
              </Typography>
              <Button
                onClick={() => setAppearWord(false)}
                variant="contained"
                sx={{ width: 80, height: 40, fontSize: "15px", my: 2 }}
              >
                閉じる
              </Button>
            </motion.div>
          )}
        </Box>
      </Box>
    </div>
  );
};
