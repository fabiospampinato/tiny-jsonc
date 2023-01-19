
/* HELPERS */

const stringOrCommentRe = /("(?:\\?[^])*?")|(\/\/.*)|(\/\*[^]*?\*\/)/g;
const stringOrTrailingCommaRe = /("(?:\\?[^])*?")|(,\s*)(?=]|})/g;

/* MAIN */

const JSONC = {
  parse: ( text: string ): any => {
    text = String ( text ); // To be extra safe
    try { // Fast path for valid JSON
      return JSON.parse ( text );
    } catch { // Slow path for JSONC and invalid inputs
      return JSON.parse ( text.replace ( stringOrCommentRe, '$1' ).replace ( stringOrTrailingCommaRe, '$1' ) );
    }
  }
};

/* EXPORT */

export default JSONC;
