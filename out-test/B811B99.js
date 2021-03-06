goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26009__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26010__i = 0, G__26010__a = new Array(arguments.length -  0);
while (G__26010__i < G__26010__a.length) {G__26010__a[G__26010__i] = arguments[G__26010__i + 0]; ++G__26010__i;}
  args = new cljs.core.IndexedSeq(G__26010__a,0);
} 
return G__26009__delegate.call(this,args);};
G__26009.cljs$lang$maxFixedArity = 0;
G__26009.cljs$lang$applyTo = (function (arglist__26011){
var args = cljs.core.seq(arglist__26011);
return G__26009__delegate(args);
});
G__26009.cljs$core$IFn$_invoke$arity$variadic = G__26009__delegate;
return G__26009;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26012__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26013__i = 0, G__26013__a = new Array(arguments.length -  0);
while (G__26013__i < G__26013__a.length) {G__26013__a[G__26013__i] = arguments[G__26013__i + 0]; ++G__26013__i;}
  args = new cljs.core.IndexedSeq(G__26013__a,0);
} 
return G__26012__delegate.call(this,args);};
G__26012.cljs$lang$maxFixedArity = 0;
G__26012.cljs$lang$applyTo = (function (arglist__26014){
var args = cljs.core.seq(arglist__26014);
return G__26012__delegate(args);
});
G__26012.cljs$core$IFn$_invoke$arity$variadic = G__26012__delegate;
return G__26012;
})()
;

return null;
});
