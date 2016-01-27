goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__108918__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__108918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108919__i = 0, G__108919__a = new Array(arguments.length -  0);
while (G__108919__i < G__108919__a.length) {G__108919__a[G__108919__i] = arguments[G__108919__i + 0]; ++G__108919__i;}
  args = new cljs.core.IndexedSeq(G__108919__a,0);
} 
return G__108918__delegate.call(this,args);};
G__108918.cljs$lang$maxFixedArity = 0;
G__108918.cljs$lang$applyTo = (function (arglist__108920){
var args = cljs.core.seq(arglist__108920);
return G__108918__delegate(args);
});
G__108918.cljs$core$IFn$_invoke$arity$variadic = G__108918__delegate;
return G__108918;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__108921__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__108921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108922__i = 0, G__108922__a = new Array(arguments.length -  0);
while (G__108922__i < G__108922__a.length) {G__108922__a[G__108922__i] = arguments[G__108922__i + 0]; ++G__108922__i;}
  args = new cljs.core.IndexedSeq(G__108922__a,0);
} 
return G__108921__delegate.call(this,args);};
G__108921.cljs$lang$maxFixedArity = 0;
G__108921.cljs$lang$applyTo = (function (arglist__108923){
var args = cljs.core.seq(arglist__108923);
return G__108921__delegate(args);
});
G__108921.cljs$core$IFn$_invoke$arity$variadic = G__108921__delegate;
return G__108921;
})()
;

return null;
});
