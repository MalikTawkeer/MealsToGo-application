import React, { useContext, useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurents-info-card.component";
import { OrderButton } from "../components/restaurant-list.styles";

import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurentInfoCard restaurent={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="eggs" />
          <List.Item title="channa" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="rice" />
          <List.Item title="rajma dal" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="rice" />
          <List.Item title="rista" />
          <List.Item title="kabab" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="coffie" />
          <List.Item title="dew" />
          <List.Item title="kehwa" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="top" size="medium">
        <OrderButton
          icon="cash"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 199 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special only $99
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
