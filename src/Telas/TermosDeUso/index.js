import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Container, EstiloTermos, } from './styles';
import { EstiloLogo } from '../../ComponentsExtras/LogoEstiloMenor';
import { Estilo } from '../../ComponentsExtras/DireitosReservados';

export default () => {
    
    return (
        <Container>
            <Image 
                style={EstiloLogo.Logo}
                source={require('../../assets/icons/barba2.png')} 
            />
            <Text style={EstiloLogo.Slogan}>App Salon</Text>
            <ScrollView centerContent={true}>
                <View style={EstiloTermos.CaixaDoTitulo}>
                    <Text style={EstiloTermos.Titulo}>TERMOS DE USO E POLÍTICA DE PRIVACIDADE</Text>
                </View>
                <View style={EstiloTermos.CaixaDoTitulo}>
                    <Text style={EstiloTermos.Subtitulo}>Coleta das informações</Text>
                    <Text style={EstiloTermos.Texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper elit et aliquam porta. Vestibulum lectus ante, faucibus et scelerisque sit amet, scelerisque in est. Maecenas pulvinar congue mi et ultrices. Quisque maximus in neque sed fringilla. Integer consectetur convallis sem sit amet vestibulum. Fusce vel mollis dolor. Vivamus venenatis urna tincidunt, rhoncus erat vitae, euismod augue. Etiam magna eros, posuere et massa sit amet, lacinia convallis ligula.</Text>
                    <Text style={EstiloTermos.Subtitulo}>Objetivo da coleta de informações</Text>
                    <Text style={EstiloTermos.Texto}>Mauris sed nisi sit amet tortor cursus facilisis. Quisque id nunc efficitur, convallis metus vel, vestibulum libero. Fusce eu elit in tellus tristique convallis. Ut tempor imperdiet sollicitudin. Vivamus quis semper lacus. Etiam non metus augue. Nam quis bibendum est. Nunc quis velit in nunc viverra imperdiet id et sapien. Integer suscipit velit non lacus molestie, quis mollis nisl mollis. Nulla efficitur pretium pharetra. Vivamus mattis sapien in fermentum tempor. Pellentesque consequat ante quis imperdiet mollis.</Text>
                    <Text style={EstiloTermos.Subtitulo}>Como as informações coletadas são usadas por empresas e/ou por terceiros</Text>
                    <Text style={EstiloTermos.Texto}>Quisque vitae sollicitudin nunc. Suspendisse potenti. Maecenas pharetra vestibulum tincidunt. Aliquam a felis tincidunt sapien commodo aliquam eget et dui. Quisque nibh nisl, cursus et nisl nec, commodo malesuada magna. Ut faucibus, ligula ac mattis tempor, mi dui pharetra quam, finibus euismod felis purus tincidunt velit. Vestibulum faucibus consequat purus, commodo malesuada tellus luctus sit amet. Nullam orci enim, consequat a lobortis vel, imperdiet convallis massa. Mauris laoreet pharetra ante a sollicitudin. Integer vitae velit felis. Maecenas a facilisis mauris. Suspendisse potenti. Nullam eget ex in libero ultricies volutpat vel et leo. Fusce sagittis tortor vel erat iaculis posuere. Aliquam non elementum tortor.</Text>
                    <Text style={EstiloTermos.Subtitulo}>Como o usuário pode analisar e fazer mudanças nas suas informações</Text>
                    <Text style={EstiloTermos.Texto}>Etiam eget imperdiet quam. Nunc imperdiet eleifend lorem non feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis enim eget lectus congue suscipit. Sed consequat ligula ut magna euismod mollis. Morbi sit amet nisl tortor. Nulla a congue nisi. Nullam in mi eget est pharetra convallis eget nec nibh. Nunc lorem arcu, vulputate in facilisis eu, vulputate non ligula. Maecenas posuere felis in gravida elementum. Morbi et hendrerit arcu. Aliquam lobortis felis risus, sed viverra nisi lobortis sed. Quisque id mauris vel leo interdum euismod nec venenatis neque.</Text>
                </View>
                <View>
                    <Text style={Estilo.Copyrigth}>© 2021 App Salon. All Rights Reserved.</Text>
                </View>
            </ScrollView>
        </Container>
    );
}