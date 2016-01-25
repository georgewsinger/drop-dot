goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__277263__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__277263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277264__i = 0, G__277264__a = new Array(arguments.length -  0);
while (G__277264__i < G__277264__a.length) {G__277264__a[G__277264__i] = arguments[G__277264__i + 0]; ++G__277264__i;}
  args = new cljs.core.IndexedSeq(G__277264__a,0);
} 
return G__277263__delegate.call(this,args);};
G__277263.cljs$lang$maxFixedArity = 0;
G__277263.cljs$lang$applyTo = (function (arglist__277265){
var args = cljs.core.seq(arglist__277265);
return G__277263__delegate(args);
});
G__277263.cljs$core$IFn$_invoke$arity$variadic = G__277263__delegate;
return G__277263;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__277266__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__277266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277267__i = 0, G__277267__a = new Array(arguments.length -  0);
while (G__277267__i < G__277267__a.length) {G__277267__a[G__277267__i] = arguments[G__277267__i + 0]; ++G__277267__i;}
  args = new cljs.core.IndexedSeq(G__277267__a,0);
} 
return G__277266__delegate.call(this,args);};
G__277266.cljs$lang$maxFixedArity = 0;
G__277266.cljs$lang$applyTo = (function (arglist__277268){
var args = cljs.core.seq(arglist__277268);
return G__277266__delegate(args);
});
G__277266.cljs$core$IFn$_invoke$arity$variadic = G__277266__delegate;
return G__277266;
})()
;

return null;
});
