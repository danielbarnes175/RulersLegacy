import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import PropTypes from "prop-types";
import {
  stopTimer,
  startTimer,
  isTimerRunning,
} from "services/simulation/time";
import Person from "screens/Person";
import GameMenu from "screens/GameMenu";
import burgerIcon from "assets/burger.png";

const Header = ({ world }) => {
  const [playerProfileVisible, setPlayerProfileVisible] = useState(false);
  const [menuListVisible, setMenuListVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          stopTimer();
          setPlayerProfileVisible(true);
        }}
        style={styles.leftButton}
      >
        <Image source={world.player.portrait} style={styles.picture} />
      </TouchableOpacity>
      <Modal visible={playerProfileVisible}>
        <Person
          person={world.player}
          onClose={() => {
            if (!isTimerRunning()) {
              startTimer();
            }
            setPlayerProfileVisible(false);
          }}
        />
      </Modal>
      <View>
        <Text>{world.player.name}</Text>
        <Text>{world.date}</Text>
      </View>
      <View style={styles.rightButton}>
        <TouchableOpacity
          onPress={() => {
            stopTimer();
            setMenuListVisible(true);
          }}
        >
          <Image source={burgerIcon} style={styles.burgerMenuIcon} />
        </TouchableOpacity>
        <Modal visible={menuListVisible}>
          <GameMenu
            world={world}
            onClose={() => {
              if (!isTimerRunning()) {
                startTimer();
              }
              setMenuListVisible(false);
            }}
          />
        </Modal>
      </View>
    </View>
  );
};

Header.propTypes = {
  world: PropTypes.shape({
    player: PropTypes.shape({
      portrait: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  picture: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: "auto",
  },
  burgerMenuIcon: {
    width: 60,
    height: 60,
    marginLeft: "auto", // aligns the icon to the right
  },
  leftButton: {
    position: "absolute",
    left: 30,
  },
  rightButton: {
    position: "absolute",
    right: 15,
  },
});
