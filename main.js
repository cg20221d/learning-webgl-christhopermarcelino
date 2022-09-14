/** @type {HTMLCanvasElement} */

function main() {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");

  const vertices = [0.5, 0.5, 0.0, 0.0, -0.5, 0.5, 0, 1];

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // vertex shader
  const vertexShaderCode = `
  attribute vec2 aPosition; 
  void main() {
    float x = aPosition.x;
    float y = aPosition.y;
    float z = 0.0;
    gl_PointSize = 10.0;
    gl_Position = vec4(x, y, z, 1.0);
  }
  `;

  const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); // .o file

  // fragment shader
  const fragmentShaderCode = `
  precision mediump float;
  void main() {
    float r = 0.0;
    float g = 0.0;
    float b = 1.0;
    gl_FragColor = vec4(r, g, b, 1.0);
  }`;
  const fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); // .o file

  const shaderProgram = gl.createProgram(); // .exe file
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  //
  const aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  gl.clearColor(1.0, 0.65, 0.0, 1.0); // navy color rgba
  gl.clear(gl.COLOR_BUFFER_BIT);

  // gl.drawArrays(gl.POINTS, 0, 4); // draw point
  // gl.drawArrays(gl.LINES, 0, 4); // draw lines
  // gl.drawArrays(gl.LINE_LOOP, 0, 4); // draw lines loop
  // gl.drawArrays(gl.LINE_STRIP, 0, 4); // draw lines strip
  // gl.drawArrays(gl.TRIANGLES, 0, 6); // draw triangles
  // gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // draw triangles strip
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); // draw triangles fan
}
