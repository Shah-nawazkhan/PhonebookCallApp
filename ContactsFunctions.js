import * as Contacts from 'expo-contacts';
import { Linking, Alert } from 'react-native';

// Add dummy contacts for testing
const dummyContacts = [
	{
		id: '1',
		name: 'Abc',
		phoneNumbers: [
			{
				number: '123-456-7890',
			},
		],
	},
	{
		id: '2',
		name: 'Def',
		phoneNumbers: [
			{
				number: '987-654-3210',
			},
		],
	},
	{
		id: '3',
		name: 'Ghi',
		phoneNumbers: [
            {
				number: '546-245-3296',
			},
		],
	},
	// Add more dummy contacts as needed
];

export const requestContactsPermission =
    async (setContacts, setFilteredContacts) => {
        try {
            const { status } =
                await Contacts.requestPermissionsAsync();

            if (status === 'granted') {
                // Permission granted, but we only want to show dummy contacts
                setContacts(dummyContacts);
                setFilteredContacts(dummyContacts);
            } else {
                // Permissions denied, still show dummy contacts
                setContacts(dummyContacts);
                setFilteredContacts(dummyContacts);
                console.log('Contacts permission denied');
            }
        } catch (error) {
            console.error('Error requesting contacts permission:', error);
        }
    };


export const fetchContacts =
	async (setContacts, setFilteredContacts) => {
		try {
			// Use dummyContacts for testing
			setContacts(dummyContacts);
			setFilteredContacts(dummyContacts);
		} catch (error) {
			console.error('Error fetching contacts:', error);
		}
	};

export const makeCall = (contact) => {
	const phoneNumber =
		contact.phoneNumbers
			&&
			contact.phoneNumbers.length > 0
			? contact.phoneNumbers[0].number
			: null;

	if (phoneNumber) {
		const url = `tel:${phoneNumber}`;
		Linking.openURL(url);
	} else {
		Alert.alert('No phone number available for this contact.');
	}
};

export const filterContacts =
	(contacts, searchQuery, setFilteredContacts) => {
		const filtered = contacts.filter(
			(contact) =>
				contact.name.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				(contact.phoneNumbers &&
					contact.phoneNumbers.length > 0 &&
					contact.phoneNumbers[0].number.includes(searchQuery))
		);

		setFilteredContacts(filtered);
	};
