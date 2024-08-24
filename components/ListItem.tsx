import { AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#f0ddff",
    borderRadius: 16,
    gap: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#3e3e3e",
  },
  description: {
    color: "#4c4c4c",
  },
});

type ListItemProps = {
  title: string;
  description?: string;
  done: boolean;
  onPress: () => void;
  onPressdelete: () => void;
};

const ListItem = ({
  title,
  description,
  done,
  onPress,
  onPressdelete,
}: ListItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: done ? "#dfdfdf" : "#f0ddff",
        }}
      >
        <View>
          <Text
            style={{
              ...styles.title,
              textDecorationLine: done ? "line-through" : "none",
            }}
          >
            {title}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <AntDesign
          name="delete"
          size={28}
          color="#af0808"
          style={{ zIndex: 10 }}
          onPress={onPressdelete}
        />
      </View>
    </Pressable>
  );
};

export default ListItem;
