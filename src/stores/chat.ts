import { defineStore } from "pinia";
import { ref } from "vue";

interface Chat {
    id: string;
    name: string;
    lastOnline: Date;
    messages: Message[];
}

interface Message {
    id: string;
    sender: string;
    text: string;
}
export const useChatStore = defineStore('chat', () => {
    const chatList = ref<Chat[]>([
        {
            id: '6c0cb0f4-fbb5-11ed-be56-0242ac120002',
            name: 'Муниса Эргашева',
            lastOnline: new Date('2023-05-26T23:50:00'),
            messages: [
                {
                    id: '6c0cb446-fbb5-11ed-be56-0242ac120002',
                    sender: 'Муниса Эргашева',
                    text: 'Ассалому алайкум'
                },
                {
                    id: '6c0cb586-fbb5-11ed-be56-0242ac120002',
                    sender: 'Муниса Эргашева',
                    text: 'Кредит бўйича маълумот олмоқчи эдим?'
                },
                {
                    id: '6c0cbe78-fbb5-11ed-be56-0242ac120002',
                    sender: 'Камрон Фозилов',
                    text: 'Албатта. Кредит ҳақида ушбу ҳавола орқали танишиб чиқишингиз мумкин: <a href="https://agrobank.uz/uz/person/loans" target="_blank">https://agrobank.uz/uz/person/loans</a>'
                },
                {
                    id: '6c0cbe78-fbb5-11ed-be56-0242ac120002',
                    sender: 'Муниса Эргашева',
                    text: 'Жавобингиз учун раҳмат!'
                },
            ]
        },
        {
            id: '4a7eefb4-fbb6-11ed-be56-0242ac120002',
            name: 'Сергей Иванов',
            lastOnline: new Date('2023-05-26T21:45:00'),
            messages: [
                {
                    id: '4e727afa-fbb6-11ed-be56-0242ac120002',
                    sender: 'Сергей Иванов',
                    text: 'Ассалому алайкум'
                },
                {
                    id: '5259d0d2-fbb6-11ed-be56-0242ac120002',
                    sender: 'Сергей Иванов',
                    text: 'Омонатлар ҳақида маълумот олмоқчи эдим?'
                },
                {
                    id: '57aee022-fbb6-11ed-be56-0242ac120002',
                    sender: 'Камрон Фозилов',
                    text: 'Албатта. Омонатлар ҳақида ушбу ҳавола орқали танишиб чиқишингиз мумкин: <a href="https://agrobank.uz/uz/person/deposits" target="_blank">https://agrobank.uz/uz/person/deposits</a>'
                },
            ]
        },
        {
            id: '9f210e3a-fbde-11ed-be56-0242ac120002',
            name: 'Егор Морозов',
            lastOnline: new Date('2023-05-26T20:15:00'),
            messages: [
                {
                    id: '9f211786-fbde-11ed-be56-0242ac120002',
                    sender: 'Егор Морозов',
                    text: 'Ассалому алайкум. Сизнинг банк орқали карта очтирмоқчи эдим. Қандай карта турлари мавжуд эканлиги ҳақида хабар бера оласизми?'
                },
                {
                    id: '9f211a9c-fbde-11ed-be56-0242ac120002',
                    sender: 'Камрон Фозилов',
                    text: 'Албатта. Карталар ҳақида ушбу ҳавола орқали танишиб чиқишингиз мумкин: <a href="https://agrobank.uz/uz/person/cards" target="_blank">https://agrobank.uz/uz/person/cards</a>'
                },
            ]
        },
        {
            id: '4cdd9ba8-fbf1-11ed-be56-0242ac120002',
            name: 'Жаҳонгир Абдуллаев',
            lastOnline: new Date('2023-05-26T20:15:00'),
            messages: [
                {
                    id: '4cdd96c6-fbf1-11ed-be56-0242ac120002',
                    sender: 'Жаҳонгир Абдуллаев',
                    text: 'Ассалому алайкум. Шунчаки тест учун ёзиб кўряпман. Яхши ишланглар :)'
                },
            ]
        }
    ])

    const addMessage = (chatId: string, sender: string, text: string) => {
        if (text.length > 1024) {
            alert("Длина сообщения превышает максимальный лимит в 1024 символа");
            return;
        }

        const chat = chatList.value.find(chat => chat.id === chatId);

        if (chat) {
            chat.messages.push({ id: generateUniqueId(), sender, text });
        }
    };

    const generateUniqueId = () => {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    return { chatList, addMessage }
})