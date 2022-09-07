function main() {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");

  // vertex shader
  const vertexShaderCode = "void main() {}";
  const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); // .o file

  // fragment shader
  const fragmentShaderCode = `
  void main() {

  }`;
  const fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); // .o file

  const shaderProgram = gl.createProgram(); // .exe file
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  gl.clearColor(0, 0, 0.5, 1); // navy color rgba
  gl.clear(gl.COLOR_BUFFER_BIT);
}
