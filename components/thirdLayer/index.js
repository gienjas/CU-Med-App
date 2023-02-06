import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import { borderLeftColor } from "@mui/system";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


const subWidget = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
    </>
  )
}

const Widget = ({ item }) => {
  return (
    <>
      <Box
        style={{
          margin: "2%",
          borderRadius: "4%",
          padding: "2%",
          width:"100%"
        }}
      >
        <Box flexDirection="row">
          <FontAwesome name="circle" size={24} color="black" style={{marginTop:"4%", marginLeft:"-8.5%", marginRight:"3%"}} />
          <FontAwesome name="circle" size={16} color="#eee" style={{marginTop:"5.10%", marginLeft:"-8.06%", marginRight:"3%"}} />
          <Box style={{backgroundColor: "#e0e0e0", padding:"4%", width:"100%", borderRadius:"5px"}}>
            <Text style={{ fontSize: "20px" }}>{item.text}</Text>
          </Box>
        </Box>
        {item.hasOwnProperty("sub") && 
          <Box flexDirection="column">
            {item.sub.map((subInfo) => (
              <>
                <Box style={{ marginTop: "3%",borderRadius:"4%", marginHorizontal:"5%",opacity:0.9, backgroundColor:"#FFA500", padding:"1%"}}>
                  <Text style={{fontSize:"18px"}}>{subInfo.text}</Text>
                </Box>
                </>
            ))}
          </Box>
        }
      </Box>
    </>
  );
};

const ThirdLayer = ({ route, navigation }) => {
  const { name } = route.params;
  const { data } = route.params;
  const { color } = route.params
  return (
    <>
      <Box
        w="100%"
        h="11%"
        style={{
          backgroundColor: color,
        }}
        pt="15%"
        pl="3%"
      >
        <Box
          style={{ backgroundColor: color, flexDirection:"row" }}
          w="100%"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#DDD" />
          </TouchableOpacity>
          <Text style={{ fontSize: "23px", color:"#ddd", marginTop:"-1%"}}>{name}</Text>
          <Box w="10%"></Box>
        </Box>
      </Box>
      <ScrollView>
        <Box
        position="absolute"
        left="3.5%"
        mt="-50%"
        height="510%"
        width="0.8%"
        backgroundColor="#333"
        >
          <Text style={{fontSize:"1px"}}>a</Text>
        </Box>
        <Box w="100%" h="100%" p="5%" style={{ alignItem: "center" }} backgroundColor="#d">
          {data.map((item) => (
            <Widget item={item} />
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default ThirdLayer;
