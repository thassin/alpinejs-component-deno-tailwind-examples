
function i2str( level: number ): string {
	let indent: string = "";
	for ( let i: number = 0; i < level; i++ ) indent += "  ";
	return indent;
}

export function printHTML( html: string, indentLevel: number ): string {

	const indent: string = i2str( indentLevel );

	// remove leading/tailing newlines.
	html = html.trim();

	let line: string;
	let result: string = "";

	const lines: Array<string> = html.split( "\n" );
	for ( let i: number = 0; i < lines.length; i++ ) {
		const line: string = lines[i];
		const isLastLine: boolean = i + 1 >= lines.length;
		result += indent + line + "\n";
	}

	// remove the last newline, because it is already contained in the original template.
	return result.trimRight();
} 

