goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11857__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11858__i = 0, G__11858__a = new Array(arguments.length -  0);
while (G__11858__i < G__11858__a.length) {G__11858__a[G__11858__i] = arguments[G__11858__i + 0]; ++G__11858__i;}
  args = new cljs.core.IndexedSeq(G__11858__a,0);
} 
return G__11857__delegate.call(this,args);};
G__11857.cljs$lang$maxFixedArity = 0;
G__11857.cljs$lang$applyTo = (function (arglist__11859){
var args = cljs.core.seq(arglist__11859);
return G__11857__delegate(args);
});
G__11857.cljs$core$IFn$_invoke$arity$variadic = G__11857__delegate;
return G__11857;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11860__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11861__i = 0, G__11861__a = new Array(arguments.length -  0);
while (G__11861__i < G__11861__a.length) {G__11861__a[G__11861__i] = arguments[G__11861__i + 0]; ++G__11861__i;}
  args = new cljs.core.IndexedSeq(G__11861__a,0);
} 
return G__11860__delegate.call(this,args);};
G__11860.cljs$lang$maxFixedArity = 0;
G__11860.cljs$lang$applyTo = (function (arglist__11862){
var args = cljs.core.seq(arglist__11862);
return G__11860__delegate(args);
});
G__11860.cljs$core$IFn$_invoke$arity$variadic = G__11860__delegate;
return G__11860;
})()
;

return null;
});
