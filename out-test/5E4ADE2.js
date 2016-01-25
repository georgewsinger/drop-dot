goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28087__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28088__i = 0, G__28088__a = new Array(arguments.length -  0);
while (G__28088__i < G__28088__a.length) {G__28088__a[G__28088__i] = arguments[G__28088__i + 0]; ++G__28088__i;}
  args = new cljs.core.IndexedSeq(G__28088__a,0);
} 
return G__28087__delegate.call(this,args);};
G__28087.cljs$lang$maxFixedArity = 0;
G__28087.cljs$lang$applyTo = (function (arglist__28089){
var args = cljs.core.seq(arglist__28089);
return G__28087__delegate(args);
});
G__28087.cljs$core$IFn$_invoke$arity$variadic = G__28087__delegate;
return G__28087;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28090__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28091__i = 0, G__28091__a = new Array(arguments.length -  0);
while (G__28091__i < G__28091__a.length) {G__28091__a[G__28091__i] = arguments[G__28091__i + 0]; ++G__28091__i;}
  args = new cljs.core.IndexedSeq(G__28091__a,0);
} 
return G__28090__delegate.call(this,args);};
G__28090.cljs$lang$maxFixedArity = 0;
G__28090.cljs$lang$applyTo = (function (arglist__28092){
var args = cljs.core.seq(arglist__28092);
return G__28090__delegate(args);
});
G__28090.cljs$core$IFn$_invoke$arity$variadic = G__28090__delegate;
return G__28090;
})()
;

return null;
});
