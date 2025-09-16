import {Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const Profile = () => {
    return (
        <View className="flex-1 bg-primary">
            <ScrollView className="flex-1 px-5 mt-20 mb-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{minHeight:"100%", paddingBottom:10}}
            >
                <View className="flex flex-2 flex-wrap">
                    <View className="flex-1 items-center justify-start gap-x-1">
                        <Image source={images.s001} className="w-52 h-40 rounded-lg" resizeMode="contain"/>
                        <Text className="text-sm text-white font-bold uppercase">곧 퇴근이다.</Text>
                    </View>

                    <View className="flex-1 items-center justify-start gap-x-1">
                        <Image source={images.s002} className="w-52 h-40 rounded-lg" resizeMode="contain"/>
                        <Text className="text-sm text-white font-bold uppercase">일찍 집에가야.</Text>
                    </View>
                    <View className="flex-1 items-center justify-start gap-x-1">
                        <Image source={images.s003} className="w-52 h-40 rounded-lg" resizeMode="contain" />
                        <Text className="text-sm text-white font-bold uppercase">저녁은 뭘 먹지?</Text>
                    </View>
                    <View className="flex-col items-center justify-start gap-x-1">
                        <Image source={images.s004} className="w-52 h-40 rounded-lg" resizeMode="contain" />
                        <Text className="text-sm text-white font-bold uppercase">다들 즐퇴!</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        // <View className="flex-1 bg-primary ">
        //     <ScrollView className="flex-1 px-5 mt-20 mb-5 "
        //                 showsVerticalScrollIndicator={false}
        //                 contentContainerStyle={{minHeight: "100%", paddingBottom:10}}>
        //         <View className="flex-row items-center justify-start gap-x-1">
        //             <Image source={images.s001} className="w-52 h-24 rounded-lg" />
        //             <Text className="text-sm text-white font-bold uppercase"></Text>
        //         </View>
        //     </ScrollView>
        // </View>
    )
}
export default Profile
