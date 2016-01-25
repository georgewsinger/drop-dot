goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235084__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235085__i = 0, G__235085__a = new Array(arguments.length -  0);
while (G__235085__i < G__235085__a.length) {G__235085__a[G__235085__i] = arguments[G__235085__i + 0]; ++G__235085__i;}
  args = new cljs.core.IndexedSeq(G__235085__a,0);
} 
return G__235084__delegate.call(this,args);};
G__235084.cljs$lang$maxFixedArity = 0;
G__235084.cljs$lang$applyTo = (function (arglist__235086){
var args = cljs.core.seq(arglist__235086);
return G__235084__delegate(args);
});
G__235084.cljs$core$IFn$_invoke$arity$variadic = G__235084__delegate;
return G__235084;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235087__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235088__i = 0, G__235088__a = new Array(arguments.length -  0);
while (G__235088__i < G__235088__a.length) {G__235088__a[G__235088__i] = arguments[G__235088__i + 0]; ++G__235088__i;}
  args = new cljs.core.IndexedSeq(G__235088__a,0);
} 
return G__235087__delegate.call(this,args);};
G__235087.cljs$lang$maxFixedArity = 0;
G__235087.cljs$lang$applyTo = (function (arglist__235089){
var args = cljs.core.seq(arglist__235089);
return G__235087__delegate(args);
});
G__235087.cljs$core$IFn$_invoke$arity$variadic = G__235087__delegate;
return G__235087;
})()
;

return null;
});
