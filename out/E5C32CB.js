goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22766__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22767__i = 0, G__22767__a = new Array(arguments.length -  0);
while (G__22767__i < G__22767__a.length) {G__22767__a[G__22767__i] = arguments[G__22767__i + 0]; ++G__22767__i;}
  args = new cljs.core.IndexedSeq(G__22767__a,0);
} 
return G__22766__delegate.call(this,args);};
G__22766.cljs$lang$maxFixedArity = 0;
G__22766.cljs$lang$applyTo = (function (arglist__22768){
var args = cljs.core.seq(arglist__22768);
return G__22766__delegate(args);
});
G__22766.cljs$core$IFn$_invoke$arity$variadic = G__22766__delegate;
return G__22766;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22769__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22770__i = 0, G__22770__a = new Array(arguments.length -  0);
while (G__22770__i < G__22770__a.length) {G__22770__a[G__22770__i] = arguments[G__22770__i + 0]; ++G__22770__i;}
  args = new cljs.core.IndexedSeq(G__22770__a,0);
} 
return G__22769__delegate.call(this,args);};
G__22769.cljs$lang$maxFixedArity = 0;
G__22769.cljs$lang$applyTo = (function (arglist__22771){
var args = cljs.core.seq(arglist__22771);
return G__22769__delegate(args);
});
G__22769.cljs$core$IFn$_invoke$arity$variadic = G__22769__delegate;
return G__22769;
})()
;

return null;
});
