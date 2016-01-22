goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34405__i = 0, G__34405__a = new Array(arguments.length -  0);
while (G__34405__i < G__34405__a.length) {G__34405__a[G__34405__i] = arguments[G__34405__i + 0]; ++G__34405__i;}
  args = new cljs.core.IndexedSeq(G__34405__a,0);
} 
return G__34404__delegate.call(this,args);};
G__34404.cljs$lang$maxFixedArity = 0;
G__34404.cljs$lang$applyTo = (function (arglist__34406){
var args = cljs.core.seq(arglist__34406);
return G__34404__delegate(args);
});
G__34404.cljs$core$IFn$_invoke$arity$variadic = G__34404__delegate;
return G__34404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34408__i = 0, G__34408__a = new Array(arguments.length -  0);
while (G__34408__i < G__34408__a.length) {G__34408__a[G__34408__i] = arguments[G__34408__i + 0]; ++G__34408__i;}
  args = new cljs.core.IndexedSeq(G__34408__a,0);
} 
return G__34407__delegate.call(this,args);};
G__34407.cljs$lang$maxFixedArity = 0;
G__34407.cljs$lang$applyTo = (function (arglist__34409){
var args = cljs.core.seq(arglist__34409);
return G__34407__delegate(args);
});
G__34407.cljs$core$IFn$_invoke$arity$variadic = G__34407__delegate;
return G__34407;
})()
;

return null;
});
