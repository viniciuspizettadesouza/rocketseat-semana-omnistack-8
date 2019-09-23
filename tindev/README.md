Para instalar e rodar o codigo mobile do tindev

1	Dentro da pasta do backend deixar ele rodando com o comando "yarn dev"
2	Já na pasta anterior "/semana-omnistack-rocketseat" instalar o pacote React native com o comando "npx react-native init tindev"
3 	Instalar e configurar emulador SDK
4	https://docs.rocketseat.dev/
	Instale o Chocolatey e as demais dependências: Instalando chocolatey
	Instale e configure a SDK do Android: Configurando SDK
	Configurando SDK do Android no Windows
		Android

		Crie uma pasta em um local desejado para instalação da SDK. Ex: C:\Android\Sdk

		Anote esse caminho para ser utilizado posteriormente

		Acesse https://developer.android.com/studio/#downloads, na opção "Command line tools only" baixe a SDK referente ao seu sistema operacional.

		Após feito o Download, extraia o conteúdo do pacote para a pasta criada no passo anterior.

		Agora, no Painel de Controle do Windows, abra o item “Sistema e Segurança” ou “Sistema”, clique em “Configurações avançadas do sistema”, selecione “Variáveis de ambiente” e clique no botão “Nova variável de ambiente”, indique o nome da variável como ANDROID_HOME, adicione o caminho utilizado acima (Ex: C:\Android\Sdk) como segundo parâmetro e clique em OK.

		Prompt

		Na mesma janela de "Variáveis de ambiente" no Windows, clique na variável PATH e então em "Editar". Haverá uma lista de caminhos e você deve adicionar esses dois novos caminhos no fim da lista:

		%ANDROID_HOME%\platform-tools
		%ANDROID_HOME%\tools
		Se sua versão do Windows for menor que a 10 sempre coloque ponto-e-virgula ";" no final dos caminhos para eles não se juntarem

		Agora, abra seu Command Prompt ou PowerShell como administrador e execute o seguinte comando:

		Command Prompt

		$ C:\Android\Sdk\tools\bin\sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"
PowerShell

		$ PS C:\Android\Sdk\tools\bin> .\sdkmanager.bat  "platform-tools" "platforms;android-27" "build-tools;27.0.3"
*Aceite todas licenças digitando y quando necessário.

		Instale e configure o emulador Genymotion: Configurando Emulador	
Antes de instalar o Genymotion vamos instalar o VirtualBox.
Para ambientes Mac OS X ou Windows você pode instalá-lo acessando o link https://www.virtualbox.org/wiki/Downloads ou optar por instalar junto com o Genymotion.

		Agora vamos acessar o site https://www.genymotion.com/fun-zone/ e clicar no botão “Download Genymotion Personal Edition”. O Genymotion vai pedir que você crie uma conta na plataforma, realize esse processo e depois você poderá baixar o software.

		Agora, em ambientes Mac OSX ou Windows, basta instalar o software e abrí-lo através de seus executáveis.

		Caso esteja no Linux precisamos realizar um processo a mais: extraia o arquivo .bin baixado do site do Genymotion em uma pasta de sua escolha e acesse-a via terminal. Acesse a pasta do arquivo extraído execute o seguinte comando:

		$ chmod +x genymotion-2.2.2_x64.bin
		$ ./genymotion-2.2.2_x64.bin
		Altere 2.2.2 pela versão do Genymotion que você baixou.

		Com isso o Genymotion será instalado em seu sistema e você já pode acessá-lo a partir da pasta de instalação. Por padrão a pasta que o Genymotion é instalado é /home/[usuario]/genymotion/. Acesse essa pasta pelo terminal e execute o seguinte comando para abrir o Genymotion:

		$ ./genymotion
		Como o Genymotion aberto, vamos acessar as Preferences:

		Clique no botão Settings e na aba Account faça login com sua conta criada no site do Genymotion.

		Após realizado login, ainda no menu Settings, na aba ADB precisamos informar o caminho da nossa SDK do Android

		Selecione a opção Use Custom Android SDK Tools no Genymotion e utilize o caminho onde você extraiu os arquivos baixados do site do Android anteriormente (Ex.: C:\Android\Sdk ou ~/Android/Sdk).

		Agora fechando as configurações, voltando a tela principal do Genymotion podemos clicar na opção Add que abrirá a seguinte tela:

		Vou utilizar um Samsung Galaxy S8 - 7.0.0 API 24 mas aqui você pode selecionar a opção que mais lhe agradar, tente utilizar sempre versões mais recentes do Android. Selecione a opção e clique em Next.

		Depois disso ele irá te pedir um nome para o emulador, coloque o que preferir ou deixe o padrão. Depois disso clique em Next novamente e aguarde o download das dependências. Ao acabar o processo você terá um novo emulador na lista inicial do Genymotion:

		Com dois cliques em cima do Emulador agora será possível executar o ambiente Android. Caso você receba algum erro durante esse processo recomendo executar a máquina virtual do Android diretamente pelo VirtualBox pois dessa forma você terá o log de inicialização do ambiente que conterá qualquer possível erro.

		Conectar emulador ao ADB (Android Debug Bridge)
		A última etapa é conectar o emulador ao ADB, pelo IP do dispositivo. Para verificar o IP do dispositivo, basta esticar a janela do emulador, o IP estará no título da janela.

		No terminal rode o comando:

		$ adb connect IP_DO_SEU_EMULADOR:5555
		Logo após, rode:

		$ adb devices
		Se aparecer o nome do seu dispositivo na lista, seu emulador foi conectado com sucesso!

		Com o emulador aberto, basta rodar react-native run-android na pasta do seu projeto.

5	Para a próxima etapa você ja deve ter instalado o JDK em sua máquina
6	Com o emulador aberto, basta rodar "yarn react-native run-android" na pasta "/tindev".
7	Depois da aplicação instalada para rodar futuramente deve-se navegar até a pasta "/tindev" e digitar "yarn start" e abrir o emulador
8	Abrir Debug e habilitar live reload


9	comando "yarn react-native run-android", não passou aos 49minutos do video 4

cotinuar video de 1hora e 5minutos
