goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12262__i = 0, G__12262__a = new Array(arguments.length -  0);
while (G__12262__i < G__12262__a.length) {G__12262__a[G__12262__i] = arguments[G__12262__i + 0]; ++G__12262__i;}
  args = new cljs.core.IndexedSeq(G__12262__a,0);
} 
return G__12261__delegate.call(this,args);};
G__12261.cljs$lang$maxFixedArity = 0;
G__12261.cljs$lang$applyTo = (function (arglist__12263){
var args = cljs.core.seq(arglist__12263);
return G__12261__delegate(args);
});
G__12261.cljs$core$IFn$_invoke$arity$variadic = G__12261__delegate;
return G__12261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12265__i = 0, G__12265__a = new Array(arguments.length -  0);
while (G__12265__i < G__12265__a.length) {G__12265__a[G__12265__i] = arguments[G__12265__i + 0]; ++G__12265__i;}
  args = new cljs.core.IndexedSeq(G__12265__a,0);
} 
return G__12264__delegate.call(this,args);};
G__12264.cljs$lang$maxFixedArity = 0;
G__12264.cljs$lang$applyTo = (function (arglist__12266){
var args = cljs.core.seq(arglist__12266);
return G__12264__delegate(args);
});
G__12264.cljs$core$IFn$_invoke$arity$variadic = G__12264__delegate;
return G__12264;
})()
;

return null;
});
