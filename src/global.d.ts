// Type definitions for Roll20 built-in functions and variables
// Project: Roll20 Stars Without Number Revised
// Definitions by: Karl Erik Hofseth https://github.com/Karlinator

//Modified by https://github.com/Naratna

declare type EventInfo = {
	sourceAttribute?: string;
	sourceType?: string;
	previousValue?: string;
	newValue?: string;
	removedInfo?: string;
	triggerName: string;
	htmlAttributes: { [attribute: string]: string };
};

declare type AttributeContent = string | number | boolean;

declare function getAttrs(
	attributes: string[],
	callback?: (values: { [key: string]: string }) => void
): void;

declare function setAttrs(
	values: { [key: string]: AttributeContent },
	options?: { silent?: boolean },
	callback?: (values: { [key: string]: string }) => void
): void;

declare function getSectionIDs(section_name: string, callback: (values: string[]) => void): void;

declare function generateRowID(): string;

declare function removeRepeatingRow(RowID: string): void;

declare function getTranslationByKey(key: string): string | false;

declare function getTranslationLanguage(): string;

declare function setDefaultToken(values: { [key: string]: string }): void;

declare function on(event: string, callback: (eventInfo: EventInfo) => void): void;

declare function getActiveCharacterId(): string | boolean;
