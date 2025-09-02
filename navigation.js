// Configuração de navegação para o site DevLizard
const navigation = {
    pages: {
        home: {
            path: './index.html',
            title: '🏠 Início'
        },
        team: {
            path: './Aba Quem somos/Aba quem Somos.html',
            title: '👥 Equipe'
        },
        login: {
            path: './Aba Login/Aba Login.html',
            title: '🔐 Login'
        }
    },
    
    // Função para gerar links relativos baseados na página atual
    getRelativePath: function(from, to) {
        const paths = {
            'Home': {
                'Aba Quem somos': './Aba Quem somos/Aba quem Somos.html',
                'Aba Login': './Aba Login/Aba Login.html'
            },
            'Aba Quem somos': {
                'Home': '../index.html',
                'Aba Login': '../Aba Login/Aba Login.html'
            },
            'Aba Login': {
                'Home': '../index.html',
                'Aba Quem somos': '../Aba Quem somos/Aba quem Somos.html'
            }
        };
        return paths[from] && paths[from][to] ? paths[from][to] : '#';
    }
};

// Exportar para uso em outros arquivos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = navigation;
}
