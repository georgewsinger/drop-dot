goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284184__i = 0, G__284184__a = new Array(arguments.length -  0);
while (G__284184__i < G__284184__a.length) {G__284184__a[G__284184__i] = arguments[G__284184__i + 0]; ++G__284184__i;}
  args = new cljs.core.IndexedSeq(G__284184__a,0);
} 
return G__284183__delegate.call(this,args);};
G__284183.cljs$lang$maxFixedArity = 0;
G__284183.cljs$lang$applyTo = (function (arglist__284185){
var args = cljs.core.seq(arglist__284185);
return G__284183__delegate(args);
});
G__284183.cljs$core$IFn$_invoke$arity$variadic = G__284183__delegate;
return G__284183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284187__i = 0, G__284187__a = new Array(arguments.length -  0);
while (G__284187__i < G__284187__a.length) {G__284187__a[G__284187__i] = arguments[G__284187__i + 0]; ++G__284187__i;}
  args = new cljs.core.IndexedSeq(G__284187__a,0);
} 
return G__284186__delegate.call(this,args);};
G__284186.cljs$lang$maxFixedArity = 0;
G__284186.cljs$lang$applyTo = (function (arglist__284188){
var args = cljs.core.seq(arglist__284188);
return G__284186__delegate(args);
});
G__284186.cljs$core$IFn$_invoke$arity$variadic = G__284186__delegate;
return G__284186;
})()
;

return null;
});
