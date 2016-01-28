goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58014__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58015__i = 0, G__58015__a = new Array(arguments.length -  0);
while (G__58015__i < G__58015__a.length) {G__58015__a[G__58015__i] = arguments[G__58015__i + 0]; ++G__58015__i;}
  args = new cljs.core.IndexedSeq(G__58015__a,0);
} 
return G__58014__delegate.call(this,args);};
G__58014.cljs$lang$maxFixedArity = 0;
G__58014.cljs$lang$applyTo = (function (arglist__58016){
var args = cljs.core.seq(arglist__58016);
return G__58014__delegate(args);
});
G__58014.cljs$core$IFn$_invoke$arity$variadic = G__58014__delegate;
return G__58014;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58017__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58018__i = 0, G__58018__a = new Array(arguments.length -  0);
while (G__58018__i < G__58018__a.length) {G__58018__a[G__58018__i] = arguments[G__58018__i + 0]; ++G__58018__i;}
  args = new cljs.core.IndexedSeq(G__58018__a,0);
} 
return G__58017__delegate.call(this,args);};
G__58017.cljs$lang$maxFixedArity = 0;
G__58017.cljs$lang$applyTo = (function (arglist__58019){
var args = cljs.core.seq(arglist__58019);
return G__58017__delegate(args);
});
G__58017.cljs$core$IFn$_invoke$arity$variadic = G__58017__delegate;
return G__58017;
})()
;

return null;
});
