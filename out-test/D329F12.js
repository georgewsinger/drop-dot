goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25229__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25230__i = 0, G__25230__a = new Array(arguments.length -  0);
while (G__25230__i < G__25230__a.length) {G__25230__a[G__25230__i] = arguments[G__25230__i + 0]; ++G__25230__i;}
  args = new cljs.core.IndexedSeq(G__25230__a,0);
} 
return G__25229__delegate.call(this,args);};
G__25229.cljs$lang$maxFixedArity = 0;
G__25229.cljs$lang$applyTo = (function (arglist__25231){
var args = cljs.core.seq(arglist__25231);
return G__25229__delegate(args);
});
G__25229.cljs$core$IFn$_invoke$arity$variadic = G__25229__delegate;
return G__25229;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25232__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25233__i = 0, G__25233__a = new Array(arguments.length -  0);
while (G__25233__i < G__25233__a.length) {G__25233__a[G__25233__i] = arguments[G__25233__i + 0]; ++G__25233__i;}
  args = new cljs.core.IndexedSeq(G__25233__a,0);
} 
return G__25232__delegate.call(this,args);};
G__25232.cljs$lang$maxFixedArity = 0;
G__25232.cljs$lang$applyTo = (function (arglist__25234){
var args = cljs.core.seq(arglist__25234);
return G__25232__delegate(args);
});
G__25232.cljs$core$IFn$_invoke$arity$variadic = G__25232__delegate;
return G__25232;
})()
;

return null;
});
