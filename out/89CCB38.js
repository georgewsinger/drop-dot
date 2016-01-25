goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234885__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234886__i = 0, G__234886__a = new Array(arguments.length -  0);
while (G__234886__i < G__234886__a.length) {G__234886__a[G__234886__i] = arguments[G__234886__i + 0]; ++G__234886__i;}
  args = new cljs.core.IndexedSeq(G__234886__a,0);
} 
return G__234885__delegate.call(this,args);};
G__234885.cljs$lang$maxFixedArity = 0;
G__234885.cljs$lang$applyTo = (function (arglist__234887){
var args = cljs.core.seq(arglist__234887);
return G__234885__delegate(args);
});
G__234885.cljs$core$IFn$_invoke$arity$variadic = G__234885__delegate;
return G__234885;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234888__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234889__i = 0, G__234889__a = new Array(arguments.length -  0);
while (G__234889__i < G__234889__a.length) {G__234889__a[G__234889__i] = arguments[G__234889__i + 0]; ++G__234889__i;}
  args = new cljs.core.IndexedSeq(G__234889__a,0);
} 
return G__234888__delegate.call(this,args);};
G__234888.cljs$lang$maxFixedArity = 0;
G__234888.cljs$lang$applyTo = (function (arglist__234890){
var args = cljs.core.seq(arglist__234890);
return G__234888__delegate(args);
});
G__234888.cljs$core$IFn$_invoke$arity$variadic = G__234888__delegate;
return G__234888;
})()
;

return null;
});
