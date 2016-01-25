goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48262__i = 0, G__48262__a = new Array(arguments.length -  0);
while (G__48262__i < G__48262__a.length) {G__48262__a[G__48262__i] = arguments[G__48262__i + 0]; ++G__48262__i;}
  args = new cljs.core.IndexedSeq(G__48262__a,0);
} 
return G__48261__delegate.call(this,args);};
G__48261.cljs$lang$maxFixedArity = 0;
G__48261.cljs$lang$applyTo = (function (arglist__48263){
var args = cljs.core.seq(arglist__48263);
return G__48261__delegate(args);
});
G__48261.cljs$core$IFn$_invoke$arity$variadic = G__48261__delegate;
return G__48261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48265__i = 0, G__48265__a = new Array(arguments.length -  0);
while (G__48265__i < G__48265__a.length) {G__48265__a[G__48265__i] = arguments[G__48265__i + 0]; ++G__48265__i;}
  args = new cljs.core.IndexedSeq(G__48265__a,0);
} 
return G__48264__delegate.call(this,args);};
G__48264.cljs$lang$maxFixedArity = 0;
G__48264.cljs$lang$applyTo = (function (arglist__48266){
var args = cljs.core.seq(arglist__48266);
return G__48264__delegate(args);
});
G__48264.cljs$core$IFn$_invoke$arity$variadic = G__48264__delegate;
return G__48264;
})()
;

return null;
});
