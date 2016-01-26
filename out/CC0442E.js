goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296713__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296714__i = 0, G__296714__a = new Array(arguments.length -  0);
while (G__296714__i < G__296714__a.length) {G__296714__a[G__296714__i] = arguments[G__296714__i + 0]; ++G__296714__i;}
  args = new cljs.core.IndexedSeq(G__296714__a,0);
} 
return G__296713__delegate.call(this,args);};
G__296713.cljs$lang$maxFixedArity = 0;
G__296713.cljs$lang$applyTo = (function (arglist__296715){
var args = cljs.core.seq(arglist__296715);
return G__296713__delegate(args);
});
G__296713.cljs$core$IFn$_invoke$arity$variadic = G__296713__delegate;
return G__296713;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296716__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296717__i = 0, G__296717__a = new Array(arguments.length -  0);
while (G__296717__i < G__296717__a.length) {G__296717__a[G__296717__i] = arguments[G__296717__i + 0]; ++G__296717__i;}
  args = new cljs.core.IndexedSeq(G__296717__a,0);
} 
return G__296716__delegate.call(this,args);};
G__296716.cljs$lang$maxFixedArity = 0;
G__296716.cljs$lang$applyTo = (function (arglist__296718){
var args = cljs.core.seq(arglist__296718);
return G__296716__delegate(args);
});
G__296716.cljs$core$IFn$_invoke$arity$variadic = G__296716__delegate;
return G__296716;
})()
;

return null;
});
