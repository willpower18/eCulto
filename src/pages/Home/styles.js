import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#faf9f4'
    },
    indicator:{
        flex: 1,
        justifyContent: "center",
        marginBottom: 20,
    },
    header:{
        paddingTop:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    about:{
        paddingTop:10,
        fontSize:30,
        textAlign: 'justify',
        color: '#585858'
    },
    about2:{
        paddingTop:5,
        fontSize:18,
        textAlign: 'justify',
        color: '#585858'
    },
    wb:{
        paddingBottom:5,
        fontSize:12,
        color:'#8b57c9',
        textAlign: 'center',
    },
    titleChurch:{
        marginTop:10,
        marginBottom:5,
        fontSize:24,
        color:'#8b57c9',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerBrand:{
        fontSize:24,
        paddingTop:10,
        color:'#8b57c9',
        fontWeight: 'bold',
    },
    homeIcon:{
        paddingTop: 10,
    },
    dashBoard:{
        marginTop:25,
        paddingTop:10,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    dashBoard2:{
        marginTop:5,
        paddingTop:10,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    dashBoardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleDash:{
        fontSize:18,
        color: '#7f7f7f',
        fontWeight: 'bold',
    },
    progressBar:{
        marginTop:10,
    },
    titleDashResult:{
        fontSize:24,
        color: '#ffbe06',
        fontWeight: 'bold',
    },
    valueDash:{
        fontSize:24,
        color: '#13131a',
        marginTop:5,
        fontWeight: 'bold',
    },
    dashBoardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleDash2:{
        fontSize:24,
        color: '#FF4206',
        fontWeight: 'bold',
    },
    fontCurrency:{
        fontSize:15,
        color:'#13131a'
    },
    lineButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    IncidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#737380',
    },
    contactBox:{
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16,
    },
    actions:{
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    action:{
        backgroundColor: "transparent",
        borderRadius:8,
        height: 50,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        color: "#8b57c9",
        fontSize:12,
        textAlign: 'center',
    },
    headerText:{
        fontSize:20,
        color:'#737380',
        fontWeight: 'bold',
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color: '#737380'
    },
    incidentList:{
        marginTop:32,
    },
    Incident:{
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    IncidentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    IncidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380',
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        marginTop: 5,
        color: '#737380',
        fontSize:15,
        fontWeight: 'bold',
    }
});