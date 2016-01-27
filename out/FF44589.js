goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296768__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296769__i = 0, G__296769__a = new Array(arguments.length -  0);
while (G__296769__i < G__296769__a.length) {G__296769__a[G__296769__i] = arguments[G__296769__i + 0]; ++G__296769__i;}
  args = new cljs.core.IndexedSeq(G__296769__a,0);
} 
return G__296768__delegate.call(this,args);};
G__296768.cljs$lang$maxFixedArity = 0;
G__296768.cljs$lang$applyTo = (function (arglist__296770){
var args = cljs.core.seq(arglist__296770);
return G__296768__delegate(args);
});
G__296768.cljs$core$IFn$_invoke$arity$variadic = G__296768__delegate;
return G__296768;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296771__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296772__i = 0, G__296772__a = new Array(arguments.length -  0);
while (G__296772__i < G__296772__a.length) {G__296772__a[G__296772__i] = arguments[G__296772__i + 0]; ++G__296772__i;}
  args = new cljs.core.IndexedSeq(G__296772__a,0);
} 
return G__296771__delegate.call(this,args);};
G__296771.cljs$lang$maxFixedArity = 0;
G__296771.cljs$lang$applyTo = (function (arglist__296773){
var args = cljs.core.seq(arglist__296773);
return G__296771__delegate(args);
});
G__296771.cljs$core$IFn$_invoke$arity$variadic = G__296771__delegate;
return G__296771;
})()
;

return null;
});
