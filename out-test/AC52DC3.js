goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34405__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34406__i = 0, G__34406__a = new Array(arguments.length -  0);
while (G__34406__i < G__34406__a.length) {G__34406__a[G__34406__i] = arguments[G__34406__i + 0]; ++G__34406__i;}
  args = new cljs.core.IndexedSeq(G__34406__a,0);
} 
return G__34405__delegate.call(this,args);};
G__34405.cljs$lang$maxFixedArity = 0;
G__34405.cljs$lang$applyTo = (function (arglist__34407){
var args = cljs.core.seq(arglist__34407);
return G__34405__delegate(args);
});
G__34405.cljs$core$IFn$_invoke$arity$variadic = G__34405__delegate;
return G__34405;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34408__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34409__i = 0, G__34409__a = new Array(arguments.length -  0);
while (G__34409__i < G__34409__a.length) {G__34409__a[G__34409__i] = arguments[G__34409__i + 0]; ++G__34409__i;}
  args = new cljs.core.IndexedSeq(G__34409__a,0);
} 
return G__34408__delegate.call(this,args);};
G__34408.cljs$lang$maxFixedArity = 0;
G__34408.cljs$lang$applyTo = (function (arglist__34410){
var args = cljs.core.seq(arglist__34410);
return G__34408__delegate(args);
});
G__34408.cljs$core$IFn$_invoke$arity$variadic = G__34408__delegate;
return G__34408;
})()
;

return null;
});
