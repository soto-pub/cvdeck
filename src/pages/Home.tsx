import { Box, Button, Typography } from "@mui/material";
import cardgame_deck_hiku from "../img/cardgame_deck_hiku.png";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

export const Home = () => {
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
        <Typography variant={isMobile ? "h5" : "h3"} sx={{ mb: 2 }}>
          会話デッキ
        </Typography>
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: 5,
            position: "relative",
            height: "70vh",
            minHeight: "500px",
            width: "90%",
            overflow: "auto",
          }}
        >
          <img
            src={cardgame_deck_hiku}
            alt="デッキから引く人"
            style={{
              opacity: 0.3,
              width: "50%",
              maxWidth: "400px",
              maxHeight: "400px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Box
            sx={{
              position: "relative",
              m: 5,
            }}
          >
            <Typography>
              初対面の人と話すときに何を話そうか困ったことはありませんか？
            </Typography>
            <Typography>
              慣れ親しんだ人でも話題が尽きたことはありませんか？
            </Typography>
            <br />
            <Typography>そんなあなたに会話デッキ。</Typography>
            <br />

            <Typography>ランダムに色々な話題をドローできます。</Typography>

            <Typography variant="h5" sx={{ mt: 2 }}>
              構築済みデッキ
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
              1. スタンダードフォーマル
            </Typography>
            <Typography>
              無難な話題をふんだんに取り入れたデッキです。
            </Typography>
            <Typography>初対面の人との会話にどうぞ！</Typography>
            <Button
              variant="contained"
              sx={{ width: 250, height: 70, fontSize: "15px", my: 2 }}
            >
              <Link
                to={`/cvdeck/standard`}
                style={{ color: "white", textDecoration: "none" }}
              >
                スタンダードフォーマルでPlay!
              </Link>
            </Button>
            <Typography
              variant="h6"
              sx={{ mt: 1, fontWeight: "bold", color: "#ff69b4" }}
            >
              2. カジュアル恋愛デッキ
            </Typography>
            <Typography>恋愛に関する質問で構成されたデッキです。</Typography>
            <Typography>仲のいい人とやると楽しいかもしれません。</Typography>
            <Button
              variant="contained"
              sx={{
                width: 250,
                height: 70,
                fontSize: "15px",
                my: 2,
                backgroundColor: "#ff69b4",
                "&:hover": {
                  background: "#db7093",
                },
              }}
            >
              <Link
                to={`/cvdeck/love`}
                style={{ color: "white", textDecoration: "none" }}
              >
                カジュアル恋愛デッキでPlay!
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
